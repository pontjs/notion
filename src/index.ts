import { createGracefulClient } from "@pontx/sdk";
import type { APIs } from "./apis/notion/apis";
import { specMeta } from "./apis/notion/apiMeta";
import {
  DEFAULT_BASE_URL,
  requestNotion,
  type NotionRequestOptions,
} from "./runtime";

export type NotionClientOptions = NotionRequestOptions;
export type NotionClient = APIs;

export function createNotionClient(options: NotionClientOptions = {}): NotionClient {
  return createGracefulClient<APIs>({
    pontxSpecMeta: specMeta as never,
    baseUrl: options.baseUrl ?? DEFAULT_BASE_URL,
    baseRequestFn: (url, init) => requestNotion(url, init, options),
  }) as unknown as NotionClient;
}

const notionClient = createNotionClient();

export { NotionHttpError } from "./runtime";
export type { APIs } from "./apis/notion/apis";
export * as schemas from "./apis/notion/schemas";
export { notionClient };
export default notionClient;
