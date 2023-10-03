function getDayOfTheWeek(utc) {
  // Pentru a crea o data, pornind la o valoare unix utc, este nevoie sa o inmultim cu 1000 mai intai.
  const date = new Date(utc * 1000);

  const dayIndex = date.getDay();
  let day;

  switch (dayIndex) {
    case 0:
      day = "Duminica";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marti";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sambata";
      break;
    default:
      throw new Error("Indexul trebuie sa fie intre 0 si 6.");
  }
  // console.log(day);

  return day;
}

function getHour(utc) {
  const date = new Date(utc * 1000);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return hours + ":" + minutes;
}

// function getHour(utc) {
//   const date = new Date(utc * 1000);

//   let hours = date.getHours();
//   let minutes = date.getMinutes();

//   if (hours < 10) {
//     hours = '0' + hours;
//   }
//   if (minutes < 10) {
//     minutes = '0' + minutes;
//   }
//   const formattedHour = hours + ':' + minutes;

//   return formattedHour;
// }