# @pontx/notion

Type-safe Notion API SDK and CLI generated from the exact PontxSpec in the
Notion API candidate metadata (49 endpoints / 523 schemas, Notion-Version
2026-03-11).

## Install

```bash
pnpm add @pontx/notion
```

## SDK

```ts
import { createNotionClient } from "@pontx/notion";

const client = createNotionClient({ auth: process.env.NOTION_ACCESS_TOKEN });
const me = await client.users.getSelf();
```

The client sends the required `Notion-Version: 2026-03-11` header on every
request and attaches the bearer token only when `auth` or the
`NOTION_ACCESS_TOKEN` environment variable is provided.

## CLI

```bash
pnpm add --global @pontx/notion
pontx-notion list apis
pontx-notion call users getSelf --Notion-Version 2026-03-11 --dry-run
```

## Terms and data boundary

This package makes caller-directed requests only with the caller’s own
credentials. Notion workspace data is private End User content and the Notion
Developer Terms impose data-handling and privacy obligations on integrators;
Pontx Hub neither proxies, caches, nor aggregates Notion workspace data.
Callers must confirm their own Notion terms and data-compliance posture before
use. This package does not redistribute the Notion OpenAPI document or any
Notion SDK source (see source.provenance.json).
