export function capitalize(s?: string): string | undefined {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

export function normalizeForSort<T extends string|undefined>(s: T): T {
  if (!s) return s;
  return s.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') as T
}
