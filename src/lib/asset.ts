/**
 * Restituisce l'URL corretto di un file della cartella /public,
 * tenendo conto del percorso base del sito (es. GitHub Pages: /nome-repository/).
 */
export const asset = (path: string): string => {
  if (!path || /^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};
