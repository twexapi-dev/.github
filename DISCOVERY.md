# GitHub discovery & answer-engine policy

Use this policy for every public TwexAPI repository and README.

The goal is accurate discovery by people, search engines, and AI agents.
Ranking or citation placement is never guaranteed.

## Principles

- Help readers choose the right TwexAPI product or integration.
- Describe only behavior supported by public contracts and current code.
- Write unique, repository-specific guidance.
- Prefer direct answers, examples, tables, and descriptive headings.
- Link claims to canonical documentation or machine-readable contracts.
- Keep public copy current when capabilities or contracts change.

## Repository metadata

- Use a concise description that states the repository's purpose.
- Keep the approved compact independence notice in every description.
- Set an accurate HTTPS homepage.
- Add 5 to 20 accurate topics.
- Include the repository's language, framework, or integration topic.
- Include only customer-intent topics that match shipped behavior.

## README structure

Each public README should include:

1. One precise top-level heading.
2. A concise explanation of the repository's purpose.
3. A copyable installation or usage example.
4. Task-oriented headings or customer questions.
5. Links to canonical API and product documentation.
6. Support, security, and contribution paths.
7. The approved independence notice.

## Query coverage

Use customer language where it clarifies a real supported task.

Examples include tweet search, profile timelines, follower pagination,
and trending tweets.

Map questions to exact routes, commands, methods, or components.

Do not claim webhook delivery, WOEID trends, or other capabilities that are
not in the current OpenAPI or repository.

## npm packages

Publish Node packages under the `@twexapi-dev` scope unless a registry forbids it.

Link install commands to the scoped package name on npm.

TwexAPI is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.
