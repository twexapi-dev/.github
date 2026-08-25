# Build debug information

Projects that ship compiled artifacts should document how to reproduce builds locally.

Minimum evidence per repository:

- Documented install command
- Documented build command
- Documented test command
- Frozen lockfiles where the ecosystem supports them

Integration repositories with reproducible package checks:

- [paperclip-plugin-x-api-scraper](https://github.com/twexapi-dev/paperclip-plugin-x-api-scraper) — `pnpm check:reproducible`
- [n8n-nodes-x-api-scraper](https://github.com/twexapi-dev/n8n-nodes-x-api-scraper) — `npm run check:reproducible`

Record additional reproducibility evidence in each repository's README or CI workflow.

TwexAPI is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.
