function getRandomLetter() {
  let char = '';
  let chars = 'ABC';

  char += chars.charAt(Math.floor(Math.random() * chars.length));
  
  return char;
}

export default getRandomLetter