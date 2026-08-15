export const DEFAULT_BASE_URL = "https://api.notion.com";
export const BASE_URL_ENV = "NOTION_BASE_URL";
export const NOTION_VERSION = "2026-03-11";
export const TOKEN_ENV = "NOTION_ACCESS_TOKEN";

const runtimeEnv: Record<string, string | undefined> =
  typeof process === "undefined" ? {} : process.env;

export type NotionRequestOptions = {
  baseUrl?: string;
  auth?: string;
  notionVersion?: string;
  fetchImpl?: typeof fetch;
};

export class NotionHttpError extends Error {
  readonly status: number;
  readonly responseBody: unknown;

  constructor(status: number, responseBody: unknown) {
    super(`Notion API request failed with HTTP ${status}.`);
    this.name = "NotionHttpError";
    this.status = status;
    this.responseBody = responseBody;
  }
}

async function decode(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";
  let value: unknown;
  if (contentType.includes("json")) value = await response.json();
  else value = await response.text();
  if (!response.ok) throw new NotionHttpError(response.status, value);
  return value;
}

export async function requestNotion(
  input: string,
  init: RequestInit,
  options: NotionRequestOptions = {},
) {
  const baseUrl = options.baseUrl ?? runtimeEnv[BASE_URL_ENV] ?? DEFAULT_BASE_URL;
  const url = new URL(input, baseUrl);
  const fetchImpl = options.fetchImpl ?? fetch;
  const headers = new Headers(init.headers);
  const token = options.auth ?? runtimeEnv[TOKEN_ENV];
  if (token) headers.set("authorization", `Bearer ${token}`);
  headers.set("notion-version", options.notionVersion ?? NOTION_VERSION);
  return decode(await fetchImpl(url, { ...init, headers }));
}
