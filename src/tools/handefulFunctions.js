export const wordPluralOrNot = (word, quantity) => {
    if(quantity > 1)  return word + 's';
    else return word;
}