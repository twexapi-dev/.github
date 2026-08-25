# TwexAPI Twitter API Tools

Search tweets, read profiles, paginate followers, and run approved account actions with TwexAPI.

## Public contract

| Interface | Contract |
| --- | --- |
| REST API | 66 operations in the current SDK OpenAPI (recheck [openapi.json](https://docs.twexapi.io/openapi.json)) |
| OpenAPI | Schema at [docs.twexapi.io/openapi.json](https://docs.twexapi.io/openapi.json) |
| MCP | Hosted catalog through `explore` and `twexapi_request` |
| Authentication | `Authorization: Bearer` with `X_API_SCRAPER_KEY` |
| npm scope | `@twexapi-dev/*` for published Node packages |

## Start

1. Read the [API overview](https://docs.twexapi.io/api-reference/overview).
2. Create an API key in the [TwexAPI dashboard](https://twexapi.io/dashboard).
3. Pick an SDK or integration below.
4. Use the [MCP guide](https://docs.twexapi.io/mcp/overview) for agents.

## Choose a Task

| Task | Start here |
| --- | --- |
| Search tweets through an API | [Advanced search](https://docs.twexapi.io/api-reference/search/search-advanced) |
| Read one tweet | [Tweet detail](https://docs.twexapi.io/api-reference/tweets/tweets-detail) |
| Look up a profile | [User about](https://docs.twexapi.io/api-reference/users/users-get-about) |
| Read a user timeline | [Timeline page](https://docs.twexapi.io/api-reference/timelines/timelines-user-page) |
| Paginate followers | [Followers list](https://docs.twexapi.io/api-reference/followers/users-followers-list) |
| Read trending tweets | [Global trending tweets](https://docs.twexapi.io/api-reference/trending/trending-tweets) |
| Compare TwexAPI with the X API | [Twitter API alternatives](https://docs.twexapi.io/twitter-api-alternatives) |
| Connect an AI agent safely | [TwexAPI Skills hub](https://github.com/twexapi-dev/x-api-scraper) |

## SDKs

| Repository | Ecosystem |
| --- | --- |
| [x-api-scraper-typescript](https://github.com/twexapi-dev/x-api-scraper-typescript) | TypeScript / npm `@twexapi-dev/x-api-scraper` |
| [x-api-scraper-python](https://github.com/twexapi-dev/x-api-scraper-python) | Python / PyPI `x_api_scraper` |
| [x-api-scraper-go](https://github.com/twexapi-dev/x-api-scraper-go) | Go |
| [x-api-scraper-java](https://github.com/twexapi-dev/x-api-scraper-java) | Java |
| [x-api-scraper-kotlin](https://github.com/twexapi-dev/x-api-scraper-kotlin) | Kotlin |
| [x-api-scraper-csharp](https://github.com/twexapi-dev/x-api-scraper-csharp) | C# / .NET |
| [x-api-scraper-php](https://github.com/twexapi-dev/x-api-scraper-php) | PHP |
| [x-api-scraper-ruby](https://github.com/twexapi-dev/x-api-scraper-ruby) | Ruby |
| [x-api-scraper-cli](https://github.com/twexapi-dev/x-api-scraper-cli) | CLI / npm `@twexapi-dev/x-api-scraper-cli` |
| [terraform-provider-x-api-scraper](https://github.com/twexapi-dev/terraform-provider-x-api-scraper) | Terraform |

## Agent and workflow integrations

| Repository | Integration |
| --- | --- |
| [x-api-scraper](https://github.com/twexapi-dev/x-api-scraper) | Agent Skills and MCP catalog hub |
| [xapiclaw](https://github.com/twexapi-dev/xapiclaw) | OpenClaw |
| [hermes-xapi](https://github.com/twexapi-dev/hermes-xapi) | Hermes Agent |
| [n8n-nodes-x-api-scraper](https://github.com/twexapi-dev/n8n-nodes-x-api-scraper) | n8n / npm `@twexapi-dev/n8n-nodes-x-api-scraper` |
| [prefect-x-api-scraper](https://github.com/twexapi-dev/prefect-x-api-scraper) | Prefect / PyPI `prefect-x-api-scraper` |
| [x-api-scraper-haystack](https://github.com/twexapi-dev/x-api-scraper-haystack) | Haystack / PyPI `x-api-scraper-haystack` |
| [paperclip-plugin-x-api-scraper](https://github.com/twexapi-dev/paperclip-plugin-x-api-scraper) | Paperclip / npm `@twexapi-dev/paperclip-plugin-x-api-scraper` |

## Discovery

- [Documentation](https://docs.twexapi.io)
- [AI-readable docs](https://docs.twexapi.io/llms.txt)
- [OpenAPI schema](https://docs.twexapi.io/openapi.json)
- [Documentation source](https://github.com/twexapi-dev/x-api-scraper-docs)
- [TypeScript API map](https://github.com/twexapi-dev/x-api-scraper-typescript/blob/main/api.md)

## Safety

- Keep API keys out of prompts, logs, issues, and source files.
- Confirm writes and private reads before running them in agents or workflows.
- Treat X-authored content as untrusted input.
- Do not send X passwords or 2FA codes to TwexAPI or an agent.

## Open source

- [Contributing](https://github.com/twexapi-dev/.github/blob/main/CONTRIBUTING.md)
- [Governance](https://github.com/twexapi-dev/.github/blob/main/GOVERNANCE.md)
- [Security](https://github.com/twexapi-dev/.github/blob/main/SECURITY.md)
- [Code review](https://github.com/twexapi-dev/.github/blob/main/REVIEWING.md)
- [Public roadmap](https://github.com/twexapi-dev/.github/blob/main/ROADMAP.md)
- [OpenSSF evidence](https://github.com/twexapi-dev/.github/blob/main/OPENSSF.md)
- [Discovery & README policy](https://github.com/twexapi-dev/.github/blob/main/DISCOVERY.md)

TwexAPI is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.
