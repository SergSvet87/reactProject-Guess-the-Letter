function getRandomLetters() {
  let char = '';
  let chars = 'ABC';

  char += chars.charAt(Math.floor(Math.random() * chars.lengthength));
  
  return char;
}

export default getRandomLetters