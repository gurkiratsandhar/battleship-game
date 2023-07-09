import mymodule from "./Battleship";
const Ship = mymodule.Ship;
const Hit = mymodule.hit;
const IsSunk = mymodule.isSunk;
const recieveAttack = mymodule.receiveAttack;
const gameOverCheck = mymodule.gameOverCheck;

test("ship", () => {
  expect(Ship(4, 2, 2)).toStrictEqual({
    length: 4,
    hit: 0,
    sunk: false,
    coordinates: [2, 2],
  });
});

test("hit", () => {
  expect(
    Hit({
      length: 4,
      hit: 0,
      sunk: false,
    })
  ).toStrictEqual({
    length: 4,
    hit: 1,
    sunk: false,
  });
});

test("isSunk", () => {
  expect(
    IsSunk({
      length: 4,
      hit: 4,
      sunk: false,
    })
  ).toStrictEqual({
    length: 4,
    hit: 4,
    sunk: true,
  });
});

test("recieveAttack", () => {
  expect(recieveAttack(2, 2)).toBe("working");
});

test("gameOver", () => {
  expect(gameOverCheck()).toBe(false);
});
