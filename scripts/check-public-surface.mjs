// Copyright the TwexAPI contributors.
// SPDX-License-Identifier: MIT

import { readFile } from "node:fs/promises";
import { GITHUB_ORG, PUBLIC_PROJECT_NAMES, SHARED_REPOSITORY_NAMES } from "./public-projects.mjs";

const OPENAPI_URL = "https://docs.twexapi.io/openapi.json";
const LLMS_URL = "https://docs.twexapi.io/llms.txt";
const HTTP_METHODS = new Set(["delete", "get", "head", "options", "patch", "post", "put", "trace"]);
const INDEPENDENCE_NOTICE =
  'TwexAPI is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.';
const STALE_PUBLIC_COPY = [
  /\badvanced-search-page\b/u,
  /\bfollowers-page\b/u,
  /api-reference\/tweets\/tweet-detail\b/u,
  /\bwebhook delivery\b/iu,
  /\bWOEID trends\b/iu,
  /\bxquik\b/iu,
  /\b128 operations\b/u,
];

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { accept: "text/plain", "user-agent": "twexapi-public-surface-check" },
  });
  if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}.`);
  return response.text();
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { accept: "application/json", "user-agent": "twexapi-public-surface-check" },
  });
  if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}.`);
  return response.json();
}

function operationCount(openApi) {
  return Object.values(openApi.paths ?? {}).reduce(
    (total, pathItem) =>
      total + Object.keys(pathItem ?? {}).filter((key) => HTTP_METHODS.has(key)).length,
    0,
  );
}

function extractMarkdownLinks(markdown) {
  const links = [];
  for (const match of markdown.matchAll(/\]\((https:[^)]+)\)/gu)) links.push(match[1]);
  return links;
}

function checkIndependenceNotice(markdown, label) {
  if (!markdown.includes(INDEPENDENCE_NOTICE)) {
    throw new Error(`${label} is missing the approved independence notice.`);
  }
}

function checkStaleCopy(markdown, label) {
  for (const pattern of STALE_PUBLIC_COPY) {
    if (pattern.test(markdown)) {
      throw new Error(`${label} contains stale or unsupported public copy: ${pattern}.`);
    }
  }
}

function normalizeDocsUrl(url) {
  return url.replace(/\.md$/u, "").replace(/\/$/, "");
}

function extractLlmsLinks(llmsText) {
  const links = new Set();
  for (const match of llmsText.matchAll(/\((https:\/\/docs\.twexapi\.io\/[^)]+)\)/gu)) {
    links.add(normalizeDocsUrl(match[1]));
  }
  for (const match of llmsText.matchAll(/^- (https:\/\/docs\.twexapi\.io\/\S+)/gmu)) {
    links.add(normalizeDocsUrl(match[1]));
  }
  return links;
}

function checkDocsLinks(links, llmsLinks) {
  for (const link of links) {
    if (!link.startsWith("https://docs.twexapi.io/")) continue;
    if (link === "https://docs.twexapi.io/" || link === "https://docs.twexapi.io") continue;
    if (link.endsWith("/openapi.json")) continue;
    if (link.endsWith("/llms.txt")) continue;
    if (!llmsLinks.has(normalizeDocsUrl(link))) {
      throw new Error(`Docs link is not listed in llms.txt: ${link}`);
    }
  }
}

function checkForbiddenLinks(links, label) {
  for (const link of links) {
    if (/xquik\.com|docs\.xquik\.com/iu.test(link)) {
      throw new Error(`${label} contains a forbidden Xquik link: ${link}`);
    }
  }
}

function checkProfileContract(profile) {
  if (!profile.includes("openapi.json")) {
    throw new Error("profile/README.md must link to openapi.json for the REST operation count.");
  }
  if (!profile.includes("@twexapi-dev/*")) {
    throw new Error("profile/README.md is missing the @twexapi-dev npm scope.");
  }
  if (!profile.includes("explore") || !profile.includes("twexapi_request")) {
    throw new Error("profile/README.md is missing MCP tool names.");
  }
}

async function listPublicRepos() {
  const headers = {
    accept: "application/vnd.github+json",
    "user-agent": "twexapi-public-surface-check",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const repos = [];
  for (let page = 1; ; page += 1) {
    const response = await fetch(
      `https://api.github.com/orgs/${GITHUB_ORG}/repos?type=public&per_page=100&page=${page}`,
      { headers },
    );
    if (!response.ok) throw new Error(`GitHub REST returned HTTP ${response.status}.`);
    const batch = await response.json();
    repos.push(...batch.map(({ name }) => name));
    if (batch.length < 100) return repos;
  }
}

function checkRepoInventory(actualNames) {
  const actual = new Set(actualNames);
  const required = [...SHARED_REPOSITORY_NAMES, ...PUBLIC_PROJECT_NAMES];
  const missing = required.filter((name) => !actual.has(name));
  if (missing.length > 0) {
    throw new Error(`Missing expected public repositories: ${missing.join(", ")}.`);
  }
}

const [profile, rootReadme, llmsText, openApi, publicRepos] = await Promise.all([
  readFile("profile/README.md", "utf8"),
  readFile("README.md", "utf8"),
  fetchText(LLMS_URL),
  fetchJson(OPENAPI_URL),
  listPublicRepos(),
]);

const llmsLinks = extractLlmsLinks(llmsText);
const operationTotal = operationCount(openApi);

checkRepoInventory(publicRepos);
checkIndependenceNotice(profile, "profile/README.md");
checkIndependenceNotice(rootReadme, "README.md");
checkStaleCopy(profile, "profile/README.md");
checkStaleCopy(rootReadme, "README.md");
checkProfileContract(profile);
checkDocsLinks(extractMarkdownLinks(profile), llmsLinks);
checkDocsLinks(extractMarkdownLinks(rootReadme), llmsLinks);
checkForbiddenLinks(extractMarkdownLinks(profile), "profile/README.md");
checkForbiddenLinks(extractMarkdownLinks(rootReadme), "README.md");

process.stdout.write(
  `Checked ${publicRepos.length} public repositories and ${llmsLinks.size} llms.txt docs links against ${operationTotal} OpenAPI operations.\n`,
);
