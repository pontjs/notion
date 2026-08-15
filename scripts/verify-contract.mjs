import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const bytes = await readFile(resolve("pontx-spec.json"));
const spec = JSON.parse(bytes);
const provenance = JSON.parse(await readFile(resolve("source.provenance.json"), "utf8"));
const entries = Object.entries(spec.apis ?? {});
const schemas = Object.keys(spec.components?.schemas ?? {});
const tags = new Set((spec.tags ?? []).map(({ name }) => name));

assert.equal(spec.pontx, "2.1");
assert.equal(spec.name, "notion");
assert.equal(spec.style, "RESTFul");
assert.deepEqual(spec.servers, [{
  id: "notion-production",
  url: "https://api.notion.com",
  description: "Notion API 生产 HTTPS 服务（路径前缀 /v1）。",
}]);
assert.equal(entries.length, 49);
assert.equal(schemas.length, 523);
assert.deepEqual([...tags].sort(), [
  "asyncTasks", "blocks", "comments", "customEmojis", "dataSources",
  "databases", "fileUploads", "meetingNotes", "oAuth", "pages",
  "search", "users", "views",
]);
assert.equal(new Set(entries.map(([, api]) => api.operationId)).size, 49);
assert.deepEqual(Object.keys(spec.components.securitySchemes).sort(), ["basicAuth", "bearerAuth"]);
assert.deepEqual(spec.security, [{ bearerAuth: [] }]);

const expectedControllers = {
  asyncTasks: 1, blocks: 5, comments: 5, customEmojis: 1, dataSources: 5,
  databases: 3, fileUploads: 5, meetingNotes: 2, oAuth: 3, pages: 7,
  search: 1, users: 3, views: 8,
};
for (const [key, api] of entries) {
  const [tag, id, ...extra] = key.split("/");
  assert.equal(extra.length, 0, key + ": hierarchy must be tag/operationId");
  assert.equal(api.operationId, id, key + ": unstable operationId");
  assert.deepEqual(api.tags, [tag], key + ": controller must come from its explicit tag");
  assert(tags.has(tag), key + ": undeclared tag");
  assert(api.path.startsWith("/v1/"), key + ": lost Notion API v1 path prefix");
  assert.equal(api.metadata?.execution?.enabled, false, key + ": Hub proxy must stay disabled");
  assert.match(api.metadata.execution.disabledReason, /Notion 工作区数据|Notion workspace data/, key + ": missing privacy boundary");
  const versionHeader = api.parameters?.find(({ in: location, name }) =>
    location === "header" && name === "Notion-Version");
  assert.equal(versionHeader?.required, true, key + ": Notion-Version header must be required");
  assert(api.requestExamples?.default?.request, key + ": request example missing");
  assert(api.requestExamples.default.expectedStatus, key + ": expected status missing");
  for (const match of api.path.matchAll(/\{([^}]+)\}/g)) {
    const parameter = api.parameters?.find(({ in: location, name }) =>
      location === "path" && name === match[1]);
    assert.equal(parameter?.required, true, key + ": path parameter " + match[1] + " is not required");
  }
  const opId = api.operationId;
  assert.match(opId, /^[a-zA-Z_$][a-zA-Z0-9_$]*$/, opId + ": operationId is not code-generation safe");
}

for (const [tag, count] of Object.entries(expectedControllers)) {
  assert.equal(entries.filter(([, api]) => api.tags[0] === tag).length, count, tag + " endpoint count mismatch");
}

const actualHash = createHash("sha256").update(bytes).digest("hex");
assert.equal(actualHash, provenance.metadata.sha256);
assert.equal(provenance.metadata.commit, "627f5358b1c49114337776afa442fa5381d0f265");
assert.equal(provenance.metadata.specPath, "candidates/notion/spec.pontx.json");
assert.equal(provenance.upstream.openApiSha256, "c90a4587bc951a7357419af4126c5ce6924a600255ef2b460dc6834938ea36dc");
assert.equal(provenance.derivation.endpoints, 49);
assert.equal(provenance.derivation.schemas, 523);
assert.equal(provenance.derivation.sourceFree, true);
assert.equal(provenance.upstream.license, "MIT (official @notionhq/client SDK)");

console.log("Verified Notion contract " + actualHash + ": 49 Endpoints, 523 Schemas, 13 explicit Controllers, zero Hub proxy operations.");
