const generate = require("./generate");
const readlineSync = require("readline-sync");
const name = readlineSync.question("Напишите свое имя? ");
console.log(`Игрок - ${name}`);

function fire() {
  const newArr = [...generate];
  const arrMap = newArr.map((el) =>
    el.map((elem) => {
      let findEl = "💧";
      if (elem === 1) {
        findEl = "❌";
      }
      return findEl;
    })
  );
  return arrMap.join("\n").replace(/,/g, "");
}

function showBattlefield() {
  const fireRun = fire();
  return fireRun;
}

function endGame() {
  const text = `Thx for game - ${name}`;
  return text;
}



console.table(showBattlefield());
console.log(endGame());
