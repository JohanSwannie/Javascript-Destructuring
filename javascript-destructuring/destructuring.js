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
