function countUppercaseLetters(str) {
  let count = 0;
 // итерируем по каждому символу строки
  for (let i = 0; i < str.length; i++) {
 // проверяем, является ли символ прописной латинской 
    if (str[i] >= 'A' && str[i] <= 'Z') {
      count++;
    }
  }
  return count;
}
console.log(countUppercaseLetters('JavaScript123'))

function combineStrings(N1, N2, S1, S2) {
  //Переменная, которая получает значение строки, состоящей из `S1`, начиная с индекса 0 до индекса `N1`, и `S2`, начиная со второго с конца символа и до конца строки
  var newString = S1.slice(0, N1) + S2.slice(-N2);
  return newString;
}
console.log(combineStrings(2, 4, 'JavaScript', 'Coding'))

export { countUppercaseLetters, combineStrings }
