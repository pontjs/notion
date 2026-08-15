import { createNotionClient } from "../../dist/index.mjs";

const client = createNotionClient({
  fetchImpl: async () => new Response("{}", { headers: { "content-type": "application/json" } }),
});

client.users.getSelf();
client.users.getUser("0ab51e95-9373-4d42-97f8-1b5b0a5c0b52");
client.pages.postPage({ parent: { database_id: "0ab51e95-9373-4d42-97f8-1b5b0a5c0b52" }, properties: {} });
client.search.search({ query: "meeting notes" });

// @ts-expect-error Controllers must come only from explicit PontxSpec tags.
client.common.getSelf();
// @ts-expect-error getSelf takes no path arguments.
client.users.getSelf("0ab51e95-9373-4d42-97f8-1b5b0a5c0b52");
