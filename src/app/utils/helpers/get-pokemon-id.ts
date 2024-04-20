export const GetPokemonID = (url: string) => {
  const urlSplit = url.split('/');
  if (urlSplit.length === 0) return '';
  return urlSplit[urlSplit.length - 2];
};
