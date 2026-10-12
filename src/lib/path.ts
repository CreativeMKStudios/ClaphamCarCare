function root() {
  const raw = import.meta.env.BASE_URL || "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

export function path(href: string) {
  if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("http")) return href;
  const hashAt = href.indexOf("#");
  const hash = hashAt >= 0 ? href.slice(hashAt) : "";
  let bare = (hashAt >= 0 ? href.slice(0, hashAt) : href).trim();
  if (!bare.startsWith("/")) bare = `/${bare}`;
  if (bare === "/") return `${root()}${hash}`;
  const cleaned = bare.replace(/^\//, "").replace(/\/$/, "");
  return `${root()}${cleaned}/${hash}`;
}

export function asset(file: string) {
  return `${root()}${file.replace(/^\//, "")}`;
}

export function absolute(href: string) {
  return new URL(path(href), import.meta.env.SITE).toString();
}
