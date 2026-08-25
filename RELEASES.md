# Release integrity & verification

This guide covers cryptographic verification for public twexapi-dev releases where supported.

Use public registry or GitHub evidence for every verification.

Never trust a package because a signature merely exists.

Verify the signer identity, repository, artifact digest, and expected workflow.

## npm packages under `@twexapi-dev`

Current public Node packages:

- `@twexapi-dev/x-api-scraper`
- `@twexapi-dev/x-api-scraper-cli`
- `@twexapi-dev/n8n-nodes-x-api-scraper`
- `@twexapi-dev/paperclip-plugin-x-api-scraper`

Install with a lockfile, then inspect signatures when npm provenance is enabled:

```sh
npm audit signatures
```

Confirm the expected package name and `twexapi-dev` source repository.

## Deprecated npm names

These names are deprecated. Use the scoped replacements:

- `n8n-nodes-x-api-scraper` → `@twexapi-dev/n8n-nodes-x-api-scraper`
- `@twexapi/paperclip-plugin-x-api-scraper` → `@twexapi-dev/paperclip-plugin-x-api-scraper`

## PyPI packages

Verify PEP 740 attestations when the project publishes them:

```sh
uvx --from pypi-attestations \
  pypi-attestations verify pypi \
  --repository https://github.com/twexapi-dev/PROJECT \
  WHEEL_URL
```

Replace `PROJECT` with the matching repository and `WHEEL_URL` with the selected wheel URL.

## GitHub attestations

When a repository publishes release artifacts with SLSA provenance:

```sh
gh attestation verify ARTIFACT --repo twexapi-dev/PROJECT
```

Replace `PROJECT` with the matching repository and `ARTIFACT` with the downloaded file path.

## Release requirements

Before publishing:

- Build from the protected default branch or an approved release tag.
- Match the release version and source tag.
- Run every required test, analysis, and licensing check for that repository.
- Document verification commands in the repository README when practical.

After publishing:

- Verify one public artifact as a consumer when attestations are available.
- Link security fixes from release notes.

Update [OPENSSF.md](OPENSSF.md) only from current default-branch evidence.

TwexAPI is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.
