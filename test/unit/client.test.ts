import { describe, expect, it, vi } from "vitest";
import { createNotionClient, NotionHttpError } from "../../src/index";

describe("@pontx/notion", () => {
  it("exposes the thirteen explicit PontxSpec controllers without common/default", () => {
    const client = createNotionClient({ fetchImpl: vi.fn() as unknown as typeof fetch });
    const keys = Object.keys(client);
    expect(keys.filter((key) => !key.includes("/")).sort()).toEqual([
      "asyncTasks", "blocks", "comments", "customEmojis", "dataSources",
      "databases", "fileUploads", "meetingNotes", "oAuth", "pages",
      "search", "users", "views",
    ]);
    expect(keys.filter((key) => key.includes("/"))).toHaveLength(49);
    expect("common" in client).toBe(false);
    expect("default" in client).toBe(false);
  });

  it("serializes users.getSelf with Notion-Version and no credentials", async () => {
    const payload = { object: "user", id: "0ab51e95-9373-4d42-97f8-1b5b0a5c0b52", type: "person", name: "Example Member", person: { email: "member@example.com" } };
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "content-type": "application/json" },
    }));
    const client = createNotionClient({ fetchImpl: fetchMock });

    await expect(client.users.getSelf()).resolves.toEqual(payload);
    const [url, init] = fetchMock.mock.calls[0] as [URL, RequestInit];
    expect(url.toString()).toBe("https://api.notion.com/v1/users/me");
    expect(init.method).toBe("GET");
    expect(init.body).toBeUndefined();
    expect(new Headers(init.headers).get("notion-version")).toBe("2026-03-11");
    expect(new Headers(init.headers).has("authorization")).toBe(false);
  });

  it("attaches the bearer token only when configured", async () => {
    const payload = { object: "user", id: "0ab51e95-9373-4d42-97f8-1b5b0a5c0b52", type: "person" };
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "content-type": "application/json" },
    }));
    const client = createNotionClient({ auth: "secret-token", fetchImpl: fetchMock });

    await client.users.getSelf();
    const [, init] = fetchMock.mock.calls[0] as [URL, RequestInit];
    expect(new Headers(init.headers).get("authorization")).toBe("Bearer secret-token");
  });

  it("serializes path and body parameters for pages.postPage", async () => {
    const payload = { object: "page", id: "0ab51e95-9373-4d42-97f8-1b5b0a5c0b52" };
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "content-type": "application/json" },
    }));
    const client = createNotionClient({ auth: "secret-token", fetchImpl: fetchMock });

    await client.pages.postPage({
      parent: { database_id: "0ab51e95-9373-4d42-97f8-1b5b0a5c0b52" },
      properties: { Name: { title: [{ text: { content: "Example page" } }] } },
    });
    const [url, init] = fetchMock.mock.calls[0] as [URL, RequestInit];
    expect(url.toString()).toBe("https://api.notion.com/v1/pages");
    expect(init.method).toBe("POST");
    const body = JSON.parse(String(init.body));
    expect(body.parent.database_id).toBe("0ab51e95-9373-4d42-97f8-1b5b0a5c0b52");
    expect(body.properties.Name.title[0].text.content).toBe("Example page");
  });

  it("throws NotionHttpError on upstream errors", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ object: "error", code: "object_not_found", message: "Could not find page" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    }));
    const client = createNotionClient({ fetchImpl: fetchMock });
    try {
      await client.users.getSelf();
      throw new Error("expected the request to reject");
    } catch (error) {
      expect(error).toBeInstanceOf(NotionHttpError);
      expect(error).toMatchObject({ status: 404 });
    }
  });
});
