# Security policy

## Reporting a vulnerability

Report vulnerabilities through the affected repository's private reporting option.

Use [support@twexapi.io](mailto:support@twexapi.io) when private reporting is unavailable.

Never post exploit details through public channels.

Never post credentials, cookies, account identifiers, or private routing details.

Remove personal data from screenshots before sharing.

Open a minimal public issue only when both private channels fail.

State that a private security channel is required.

Never include technical details in that issue.

## Include

- The affected repository and version.
- A clear impact description.
- Reproduction steps or a minimal proof.
- Required access or configuration.
- Suggested remediation, when available.

Do not include real credentials, tokens, cookies, or personal data.

## Scope

This policy covers public twexapi-dev repositories, SDKs, skills, docs, plugins, examples, and package metadata.

Use normal GitHub issues for public, non-security defects.

## Response process

Maintainers will acknowledge reports within 3 business days.

Maintainers will validate and classify reports within 14 days.

Maintainers will fix confirmed public vulnerabilities within 60 days.

Critical vulnerabilities receive immediate priority.

Maintainers will coordinate disclosure timing with the reporter.

Maintainers will publish advisories and fixed versions when appropriate.

## Shared security requirements

Public projects should follow these requirements:

- Use HTTPS for network communications.
- Keep credentials outside source code, configuration examples, and logs.
- Validate untrusted inputs against explicit allowed formats.
- Apply least privilege to workflows, tokens, and application permissions.
- Pin automated workflow dependencies to immutable revisions.
- Monitor dependencies and resolve exploitable vulnerabilities.
- Require tests for corrected vulnerabilities.

Each repository must document its specific boundary and threat model.

TwexAPI is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.
