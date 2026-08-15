import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const packageJson = JSON.parse(await readFile(resolve("package.json"), "utf8"));
const workspace = await readFile(resolve("pnpm-workspace.yaml"), "utf8");
const lockfile = await readFile(resolve("pnpm-lock.yaml"), "utf8");

assert.equal(packageJson.private, false, "Release blocked: package must be public.");
assert.equal(packageJson.license, "MIT", "Release blocked: package code must retain its MIT license.");
assert.equal(typeof packageJson.repository?.url, "string",
  "Release blocked: the independent SDK repository is not established.");
assert(!/(?:^|\s)(?:link|file|workspace):|^\s*overrides\s*:/im.test(`${workspace}\n${lockfile}`),
  "Release blocked: local dependency links or workspace overrides remain.");

for (const [name, version] of Object.entries(packageJson.dependencies ?? {})) {
  assert.match(version, /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/);
  let published;
  try {
    published = execFileSync("npm", ["view", `${name}@${version}`, "version", "--json"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  } catch {
    throw new Error(`Release blocked: ${name}@${version} is unavailable in npm.`);
  }
  assert.equal(JSON.parse(published), version);
}
console.log("Release prerequisites verified: licensed public package and frozen registry graph.");
