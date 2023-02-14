function getStartDateInputs() {
  var startDate = document.getElementById('startDate').value;
  var startDateObject = new Date(startDate);

  var startMonth = startDateObject.getMonth();
  var startYear = startDateObject.getFullYear(); // isolate year integer

  var startDay = startDateObject.getUTCDate(); //isolate day of month integer
  return { startMonth, startYear, startDay }
}

function getAdoptDateInputs() {
  var adoptDateObject = new Date('01/01/2022');
  var adoptMonth = adoptDateObject.getMonth();
  var adoptYear = adoptDateObject.getFullYear();
  return { adoptMonth, adoptYear }
}


function getEndDateInputs() {
  var {startMonth} = getStartDateInputs();
  var termLength = document.getElementById('termLength').value;
  termLength = parseInt(termLength);
  var monthsTerm = (startMonth + termLength)
  var endDate;
  var endDateObject = new Date();

  if (document.getElementById('endDate').value) {
    endDate = document.getElementById('endDate').value;
    endDateObject = new Date(endDate);
    endDateObject.setDate(endDateObject.getDate() + 1);
  } else {
    endDateObject = new Date(document.getElementById('startDate').value);
    endDateObject.setMonth(monthsTerm);
    endDateObject.setDate(endDateObject.getDate() + 1);
  }  
    var endMonth = endDateObject.getMonth();
    var endYear = endDateObject.getFullYear();

    return { endDateObject, endMonth, endYear } 
}

