// const fs = require('fs');
// const readBox = fs.readFileSync('./box.txt', 'utf-8');
const box = [
  [1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 1, 0],
];
function generate() {
  // здесь код генерации игрового поля
  return box;
}

module.exports = generate();
