import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { promisify } from "node:util";
import { fileURLToPath, pathToFileURL } from "node:url";

const execFileAsync = promisify(execFile);
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

test("the built ESM and CJS SDK surfaces preserve Notion API paths without credentials", async (context) => {
  const requests = [];
  const payload = { object: "user", id: "0ab51e95-9373-4d42-97f8-1b5b0a5c0b52", type: "person", name: "Example Member" };
  const server = createServer((request, response) => {
    requests.push({ method: request.method, url: request.url, headers: request.headers });
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(payload));
  });
  await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
  context.after(() => new Promise((resolveClose) => server.close(resolveClose)));
  const address = server.address();
  assert(address && typeof address === "object");

  const esm = await import(
    pathToFileURL(resolve(repositoryRoot, "dist/index.mjs")).href + "?e2e=" + Date.now()
  );
  const client = esm.createNotionClient({
    baseUrl: "http://127.0.0.1:" + address.port,
  });
  assert.deepEqual(await client.users.getSelf(), payload);
  assert.equal(requests[0].method, "GET");
  assert.equal(requests[0].url, "/v1/users/me");
  assert.equal(requests[0].headers.authorization, undefined);
  assert.equal(requests[0].headers["notion-version"], "2026-03-11");

  const require = createRequire(import.meta.url);
  const cjs = require(resolve(repositoryRoot, "dist/index.js"));
  assert.equal(typeof cjs.createNotionClient, "function");
  assert(cjs.default.users);
});

test("the built CLI lists 49 endpoints and previews a caller-directed read", async () => {
  const cli = resolve(repositoryRoot, "dist/bin/cli.cjs");
  const { stdout: help } = await execFileAsync(process.execPath, [cli, "--help"], {
    cwd: repositoryRoot,
  });
  assert.match(help, /pontx-notion/);
  const { stdout: endpoints } = await execFileAsync(process.execPath, [cli, "list", "apis"], {
    cwd: repositoryRoot,
  });
  assert.equal(endpoints.trim().split("\n").length, 49);
  for (const expected of [
    "users.getSelf", "pages.postPage", "dataSources.queryDataSource", "oAuth.createToken",
  ]) assert.match(endpoints, new RegExp(expected));
  assert.doesNotMatch(endpoints, /common\.|default\./);

  const preview = await execFileAsync(process.execPath, [
    cli, "call", "users", "getSelf", "--Notion-Version", "2026-03-11", "--dry-run", "--curl",
  ], { cwd: repositoryRoot });
  assert.match(preview.stdout + "\n" + preview.stderr, /\/v1\/users\/me/);
});
