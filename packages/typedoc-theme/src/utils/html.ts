const htmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(html: string) {
  return html.replace(/[&<>'"]/g, (c) => htmlEscapes[c as never]);
}
