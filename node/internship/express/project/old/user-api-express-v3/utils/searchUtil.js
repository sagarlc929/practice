export function searchPattern (sentence, pattern){
  const regex = new RegExp(pattern, 'g');
  const matches = sentence.match(regex);
  return matches ? true : false;
}

