const apiKey = Deno.env.get("WEBHOOK_API_KEY");
if (!apiKey) {
  throw new Error("WEBHOOK_API_KEY environment variable is not set");
}

export default async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  if (req.headers.get("x-api-key") !== apiKey) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.text();
  console.log("GitHub event:", req.headers.get("x-github-event"));
  console.log("Body:", body);

  return Response.json({ ok: true });
};

export const config = {
  path: "/api/webhooks/github",
};
