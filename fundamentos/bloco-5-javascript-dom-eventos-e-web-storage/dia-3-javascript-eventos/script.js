function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let sexta = "day friday";
  let feriado = "day holiday";
  let sextaFeriado = "day holiday friday";
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dias = document.getElementById("days");
  for (index = 0; index < decemberDaysList.length; index += 1) {
  let litem = document.createElement("li");
  litem.innerHTML = decemberDaysList[index];
  switch (decemberDaysList[index]) {
    case 4:
        litem.className = sexta;
        break;

    case 11:
        litem.className = sexta;
        break;

    case 18:
        litem.className = sexta;
        break;

    case 24:
        litem.className = feriado;
        break;

    case 25:
        litem.className = sextaFeriado;
        break;

    case 31:
        litem.className = feriado;
        break;

    default:
      litem.className = "day";
  };
  dias.appendChild(litem);
  };
