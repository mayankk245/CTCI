// need to check that the given word has all the unique letters or not
export function isUnique(word) {
  let ar = word.split('');
  let s1 = new Set(ar);

  return ar.length == s1.size;
}
