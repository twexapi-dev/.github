# Code review policy

This policy applies to every public twexapi-dev repository.

## Required review

Submit non-trivial changes through pull requests.

A person other than the author should review each non-trivial change when practical.

Review generated changes at their source and generated output.

Direct pushes count as unreviewed modifications.

## Review checklist

Reviewers should check these areas:

- The change solves a documented problem.
- Public behavior matches documented contracts and the OpenAPI where applicable.
- Tests cover new behavior, invalid inputs, and fixed defects.
- Coverage, lint, type, build, and security checks pass.
- Untrusted inputs receive explicit validation.
- Secrets, personal data, and private implementation details stay excluded.
- Dependencies remain necessary, maintained, pinned, and license-compatible.
- Documentation and release notes match user-visible behavior.
- Metadata stays descriptive, unique, accurate, and free from keyword stuffing.

## Discoverability

- Give each README one specific H1.
- Explain the repository's purpose in the opening paragraph.
- Provide a tested quick start for the repository's primary task.
- Link canonical documentation for complete contracts.
- Preserve the approved X Corp. independence notice.

Follow [DISCOVERY.md](DISCOVERY.md) for repository metadata and README structure.

TwexAPI is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.
