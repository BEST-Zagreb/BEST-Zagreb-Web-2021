// Serves the archived files untouched and adds an archive notice at the top of every HTML page,
// plus a noindex header so search engines do not treat this copy as a duplicate of the live sites.
const NOTICE = "Archived copy of best.hr as it was in 2021, frozen on 2026-09-11. It is no longer updated and some links may not work. The current site is at <a href=\"https://best.hr/\" style=\"color:#93c5fd\">best.hr</a>.";

const BAR = '<div id="archive-notice" style="position:sticky;top:0;z-index:2147483647;background:#1f2937;color:#f9fafb;font:14px/1.4 system-ui,sans-serif;padding:8px 16px;text-align:center">' + NOTICE + '</div>';

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex");
    const type = headers.get("content-type") || "";
    if (!type.includes("text/html")) {
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    }
    return new HTMLRewriter()
      .on("body", { element(el) { el.prepend(BAR, { html: true }); } })
      .transform(new Response(response.body, { status: response.status, statusText: response.statusText, headers }));
  },
};
