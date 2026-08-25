# Assurance cases

Document the security boundary and assurance argument for each standalone twexapi-dev project in that project's repository.

This organization file records shared expectations only.

Each integration or SDK repository should state:

- Trust boundary between TwexAPI credentials and the host runtime
- Which routes or tools are exposed
- Which inputs are validated before outbound HTTP
- Which operations are read-only by default

Link project-specific assurance notes from the repository README when available.

TwexAPI is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.
