// EXAMPLE 1 - Destructuring

const contentsFolder = [
  {
    contents: {
      article: {
        title: "Weather Event",
        dates: {
          date1: "02/08/1999",
          date2: "09/11/2000",
          date3: "14/07/2005",
        },
      },
    },
    place: "Sydney Australia",
  },
  {
    contents: {
      article: {
        title: "Sport Event",
        dates: {
          date1: "15/09/2002",
          date2: "21/10/2006",
          date3: "06/08/2007",
        },
      },
    },
    place: "Melbourne Australia",
  },
  {
    contents: {
      article: {
        title: "Fishing Event",
        dates: {
          date1: "11/09/2005",
          date2: "17/03/2008",
          date3: "22/05/2011",
        },
      },
    },
    place: "Brisbane Australia",
  },
];

let destrDispl1 = "";

for (let i = 0; i < contentsFolder.length; i++) {
  const {
    contents: {
      article: { title },
      article: { dates },
    },
    place,
  } = contentsFolder[i];
  destrDispl1 = `${title} took place on dates ${dates.date1} -- ${dates.date2} -- ${dates.date3} in ${place}`;
  document.getElementById(`destructuring${i + 1}`).innerHTML = destrDispl1;
}

// EXAMPLE 2 - Destructuring

const [cat, dog, hamster, chicken, horse, sheep] = [
  "😺",
  "🐕",
  "🐹",
  "🐔",
  "🐴",
  "🐏",
];

let animalString = `Cat - ${cat} - Dog - ${dog} - Hamster - ${hamster} - Chicken - ${chicken} - Horse - ${horse} - Sheep - ${sheep}`;

document.getElementById("destructuring4").innerHTML = animalString;

// EXAMPLE 3 - Destructuring

const calculateThem = (v1, v2, v3, v4, v5, v6, v7, v9, v10, v11) => {
  const [a, b, c] = [v1 ** v2 / v3, v4 ** v5 - v6, v7 * v8 + v9];
  document.getElementById(
    `destructuring${v10}`
  ).innerHTML = `At ${v11} The Value of 'a' is ${a} - The Value of 'b' is ${b} - The Value of 'c' is ${c}`;
};

const calcArray1 = [2, 3, 2, 2, 3, 2, 2, 3, 2];
const calcArray2 = [3, 3, 3, 3, 3, 3, 3, 3, 3];
const calcArray3 = [4, 3, 4, 4, 3, 4, 4, 3, 4];
const calcArray4 = [5, 3, 5, 5, 3, 5, 5, 3, 5];
const calcArray5 = [6, 3, 6, 6, 3, 6, 6, 3, 6];
const calcArray6 = [7, 3, 7, 7, 3, 7, 7, 3, 7];

let v1 = (v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = v10 = 0);

let v11 = "";

for (let k = 0; k < 6; k++) {
  if (k === 0) {
    [v1, v2, v3, v4, v5, v6, v7, v8, v9] = calcArray1;
    v10 = 5;
    v11 = "Array 1 -";
  } else if (k == 1) {
    [v1, v2, v3, v4, v5, v6, v7, v8, v9] = calcArray2;
    v10 = 6;
    v11 = "Array2 -";
  } else if (k == 2) {
    [v1, v2, v3, v4, v5, v6, v7, v8, v9] = calcArray3;
    v10 = 7;
    v11 = "Array 3 -";
  } else if (k == 3) {
    [v1, v2, v3, v4, v5, v6, v7, v8, v9] = calcArray4;
    v10 = 8;
    v11 = "Array 4 -";
  } else if (k == 4) {
    [v1, v2, v3, v4, v5, v6, v7, v8, v9] = calcArray5;
    v10 = 9;
    v11 = "Array 5 -";
  } else {
    [v1, v2, v3, v4, v5, v6, v7, v8, v9] = calcArray6;
    v10 = 10;
    v11 = "Array 6 -";
  }
  calculateThem(v1, v2, v3, v4, v5, v6, v7, v9, v10, v11);
}
