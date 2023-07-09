let turnVar = 0;

let result;

let shipArray = [];

let missedShots = [];

let EshipArray = [];

let randomArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];

let attackArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];

function Ship(size, x1, x2, x3, y1, y2, y3, ray) {
  let length = size;
  let hit = 0;
  let sunk = false;
  let coordinates = [
    [x1, y1],
    [x2, y2],
    [x3, y3],
  ];
  ray.push({ length, hit, sunk, coordinates });
  return { length, hit, sunk, coordinates };
}

function receiveAttack(x, y) {
  let result;
  shipArray.forEach((item) => {
    if (item.coordinates[0] == x && item.coordinates[1] == y) {
      //result = "working";
      hit(item);
      isSunk(item);
      gameOverCheck();
    } else {
      missedShots.push([x, y]);
    }
  });
  //return result;
}

function gameOverCheck(shipArray) {
  let result;
  let booleanValue = true;
  let condition = shipArray.every((item) => {
    if (item.sunk == true) {
      return true;
    }
  });
  if (booleanValue == condition) {
    result = "game Over";
    Enemyboardboxes.forEach((box) => {
      box.removeEventListener("click", myAttack);
      myBoard;
    });
  } else {
    result = "keep Going";
  }
  console.log(result);
}

function hit(ship) {
  if (ship.hit !== ship.length) {
    ship.hit++;
  }
  isSunk(ship);
  return ship;
}

function isSunk(ship) {
  if (ship.hit == ship.length) {
    ship.sunk = true;
  } else {
    return;
  }
  return ship;
}

// let mymodule = { Ship, hit, isSunk, receiveAttack, gameOverCheck };

// export default mymodule;

let axis = "X";
let ships = 0;
let Eships = 0;
const messagebox = document.querySelector(".messagebox");
const myboardbox = document.querySelectorAll(".myboard");
const startBtn = document.querySelector(".btn");
const myBoard = document.querySelector(".gameboardOne");
const Enemyboard = document.querySelector(".gameboardTwo");
const Enemyboardboxes = document.querySelectorAll(".Enemyboard");

// const changeAxis = (e) => {
//   if (e.target.innerHTML == "X-axis") {
//     e.target.innerHTML = "Y-axis";
//     axis = "Y";
//   } else {
//     e.target.innerHTML = "X-axis";
//     axis = "X";
//   }
// };

const getValue = (e) => {
  let elementId = e.target.id.split(" ").map(Number);
  //  console.log(elementId);
  //  console.log(elementId);
  if (ships < 3) {
    if (elementId[0] == 0) {
      if (
        e.target.nextElementSibling.classList == "myboard" &&
        e.target.nextElementSibling.nextElementSibling.classList == "myboard"
      ) {
        e.target.classList.add("selected");
        e.target.nextElementSibling.classList.add("selected");
        e.target.nextElementSibling.nextElementSibling.classList.add(
          "selected"
        );
        ships++;
        Ship(3, 0, 1, 2, elementId[1], elementId[1], elementId[1], shipArray);
      }
    } else if (elementId[0] == 4) {
      if (
        e.target.previousElementSibling.classList == "myboard" &&
        e.target.previousElementSibling.previousElementSibling.classList ==
          "myboard"
      ) {
        e.target.classList.add("selected");
        e.target.previousElementSibling.classList.add("selected");
        e.target.previousElementSibling.previousElementSibling.classList.add(
          "selected"
        );
        ships++;
        Ship(3, 4, 3, 2, elementId[1], elementId[1], elementId[1], shipArray);
      }
    } else {
      if (
        e.target.nextElementSibling.classList == "myboard" &&
        e.target.previousElementSibling.classList == "myboard"
      ) {
        e.target.classList.add("selected");
        e.target.nextElementSibling.classList.add("selected");
        e.target.previousElementSibling.classList.add("selected");
        ships++;
        Ship(
          3,
          elementId[0] - 1,
          elementId[0],
          elementId[0] + 1,
          elementId[1],
          elementId[1],
          elementId[1],
          shipArray
        );
      }
    }
  }
};

const getRandomNumber = (someArray) => {
  let arrayLength = someArray.length;
  let randomIndex = Math.floor(Math.random() * arrayLength);
  let randomNumber = someArray[randomIndex];
  someArray.splice(randomIndex, 1);
  return randomNumber;
};

const EnemyClan = () => {
  while (Eships < 3) {
    let random = getRandomNumber(randomArray);
    let div = Enemyboard.children[random];
    let divId = div.id.split(" ").map(Number);
    console.log(divId);
    //console.log(random);
    //console.log(div);
    //div.classList.add("selected");
    if (
      random == 0 ||
      random == 5 ||
      random == 10 ||
      random == 15 ||
      random == 20
    ) {
      if (
        div.nextElementSibling.classList == "Enemyboard" &&
        div.nextElementSibling.nextElementSibling.classList == "Enemyboard"
      ) {
        div.classList.add("selected");
        div.nextElementSibling.classList.add("selected");
        div.nextElementSibling.nextElementSibling.classList.add("selected");
        Eships++;
        Ship(
          3,
          divId[0],
          divId[0] + 1,
          divId[0] + 2,
          divId[1],
          divId[1],
          divId[1],
          EshipArray
        );
      }
    } else if (
      random == 4 ||
      random == 9 ||
      random == 14 ||
      random == 19 ||
      random == 24
    ) {
      if (
        div.previousElementSibling.classList == "Enemyboard" &&
        div.previousElementSibling.previousElementSibling.classList ==
          "Enemyboard"
      ) {
        div.classList.add("selected");
        div.previousElementSibling.classList.add("selected");
        div.previousElementSibling.previousElementSibling.classList.add(
          "selected"
        );
        Eships++;
        Ship(
          3,
          divId[0],
          divId[0] - 1,
          divId[0] - 2,
          divId[1],
          divId[1],
          divId[1],
          EshipArray
        );
      }
    } else {
      if (
        div.nextElementSibling.classList == "Enemyboard" &&
        div.previousElementSibling.classList == "Enemyboard"
      ) {
        div.classList.add("selected");
        div.nextElementSibling.classList.add("selected");
        div.previousElementSibling.classList.add("selected");
        Eships++;
        Ship(
          3,
          divId[0] - 1,
          divId[0],
          divId[0] + 1,
          divId[1],
          divId[1],
          divId[1],
          EshipArray
        );
      }
    }
  }
};

const myAttack = (e) => {
  let attackId = e.target.id.split(" ").map(Number);
  EshipArray.forEach((item) => {
    item.coordinates.forEach((cD) => {
      if (cD[0] == attackId[0] && cD[1] == attackId[1]) {
        console.log("You hit something");
        hit(item);
        e.target.classList.add("hit");
      } else {
        e.target.classList.add("missed");
      }
    });
  });
  gameOverCheck(EshipArray);
  e.target.removeEventListener("click", myAttack);
  if (result != "game Over") {
    getAttack();
  }
};

const getAttack = () => {
  let random = getRandomNumber(attackArray);
  let div = myBoard.children[random];
  let divId = div.id.split(" ").map(Number);
  console.log(divId);
  shipArray.forEach((item) => {
    item.coordinates.forEach((cD) => {
      if (cD[0] == divId[0] && cD[1] == divId[1]) {
        hit(item);
        div.classList.add("hit");
      } else {
        div.classList.add("missed");
      }
    });
  });
  gameOverCheck(shipArray);
};

window.onload = () => {
  messagebox.innerHTML = "Select squares on left grid to plant your ships";
  myboardbox.forEach((box) => {
    box.addEventListener("click", getValue);
  });
  EnemyClan();
};

startBtn.addEventListener("click", () => {
  if (shipArray.length == 3 && EshipArray.length == 3) {
    messagebox.innerHTML = "Select gridbox on right to attack the Enemy";
    Enemyboardboxes.forEach((box) => {
      box.addEventListener("click", myAttack);

      //   while (result != "game Over") {
      //     if (turnVar == 0) {
      //       messagebox.innerHTML = "your turn";

      //     } else {
      //       messagebox.innerHTML = "enemy turn";
      //       getAttack();
      //     }
      //  }
    });
  } else {
    messagebox.innerHTML = "Ships are not ready yet";
  }
});
