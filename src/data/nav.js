import cats from './categories.json';
const C = cats.categories;
const FACET_ORDER = ['Κατηγορία', 'Ανάγκη', 'Σειρά'];
export function facetsFor(top) {
  return FACET_ORDER.map((f) => ({ facet: f, items: C.filter((c) => c.top === top && c.facet === f) }))
    .filter((g) => g.items.length);
}
export const tops = C.filter((c) => c.facet === null);
export const catById = Object.fromEntries(C.map((c) => [c.id, c]));
export const catBySlug = Object.fromEntries(C.map((c) => [c.slug, c]));
export const SITE_NAME = 'AHAVA CY®';
