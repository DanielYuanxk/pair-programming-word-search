const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((rowLetter) => rowLetter.join(""));
  const verticalJoin = transpose(letters).map((columnLetter) =>
    columnLetter.join("")
  );
  let found = false;

  for (const string of horizontalJoin) {
    if (string.includes(word)) found = true;
  }
  for (const string of verticalJoin) {
    if (string.includes(word)) found = true;
  }

  return found;
};
const transpose = function (matrix) {
  // Put your solution here
  const newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      newArray[y].push(matrix[x][y]);
    }
  }
  return newArray;

  // return matrix[0].map((colum, c) => matrix.map((row, r) => matrix[r][c]));
};
const result = wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "FRANK"
);

module.exports = wordSearch;
