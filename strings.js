function countUppercaseLetters(str) {
  let count = 0;
  // итерируем по каждому символу строки
  for (let i = 0; i < str.length; i += 1) {
    // проверяем, является ли символ прописной латинской
    if (str[i] >= 'A' && str[i] <= 'Z') {
      count += 1;
    }
  }
  return count;
}
console.log(countUppercaseLetters('JavaScript123'));

function combineStrings(N1, N2, S1, S2) {
  // Переменная, которая получает значение строки, состоящей из `S1`, начиная с индекса 0 до индекса `N1`, и `S2`, начиная со второго с конца символа и до конца строки
  const newString = S1.slice(0, N1) + S2.slice(-N2);
  return newString;
}
console.log(combineStrings(2, 4, 'JavaScript', 'Coding'));

function containsSubstring(s, s0) {
  return s.includes(s0);
}
console.log(containsSubstring('Hello, World!', 'World'));

function replaceSubstring(str, s, r) {
  return str.replace(s, r);
}
console.log(replaceSubstring('JavaScript is amazing', 'is', 'will be'));

function countWordsWithSameLetters(string) {
  const words = string.split('');
  let count = 0;
  for (const word of words) {
    if (word[0] === word[word.length - 1]) {
      count += 1;
    }
  }
  return count;
}
console.log(countWordsWithSameLetters('Racecar radar level Civic'));

function countWordsWithA(Str) {
  const words = Str.split(' ');

  let count = 0;

  for (const word of words) {
    if (word.includes('A') || word.includes('a')) {
      count += 1;
    }
  }
  return count;
}
console.log(countWordsWithA('Apple Banana Cherry'));

function normalizeSpaces(Str) {
  const normalizedString = Str.replace(/\s+/g, ' ');

  return normalizedString.trim();
}
console.log(normalizeSpaces('  Hello   world! '));

function extractFileName(fullFileName) {
  const fileNameParts = fullFileName.split('/');

  // Возвращаем последнюю часть
  const newName = fileNameParts[fileNameParts.length - 1];

  const name = newName.split('.');

  return name[0];
}
console.log(extractFileName('../index.html'));

encryptSentence('JavaScript');

function encryptSentence(sentence) {
  let evenChars = '';
  let oddChars = '';

  // Проходим по каждому символу строки
  for (let i = 0; i < sentence.length; i += 1) {
    // Если позиция символа четная
    if ([i + 1] % 2 === 0) {
      evenChars += sentence[i];
    } else {
      // Если позиция символа нечетная
      oddChars = sentence[i] + oddChars;
    }
  }
  // Объединяем символы в обратном порядке
  return evenChars + oddChars;
}
console.log(encryptSentence('JavaScript'));


function checkBrackets(str) {
  let stack = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
        stack.push(i);
    } else if (str[i] === ')') {
        if (stack.length === 0) {
            return i; // Номер позиции первой ошибочной закрывающей скобки
        } else {
            stack.pop();
        }
    }
}
return stack.length === 0;
}

console.log(checkBrackets('(a + b) * (c - d))'))

export {
  countUppercaseLetters, combineStrings, containsSubstring, replaceSubstring,
  countWordsWithSameLetters, countWordsWithA, normalizeSpaces, extractFileName,
  encryptSentence, checkBrackets
};
