function getStartDateInputs() {
  var startDate = document.getElementById('startDate').value;
  var startDateObject = moment.utc(startDate);
  return {startDateObject, startDate};
}

function getAdoptDateInputs() {
  var adoptDateObject = moment.utc('01/01/2022', "MM-DD-YYYY");
  var adoptDate = adoptDateObject.format('YYYY MM DD');
  return {adoptDateObject, adoptDate};
}


function getEndDateInputs() {
  var { startDate} = getStartDateInputs();
  var termLength = document.getElementById('termLength').value;
  termLength = parseInt(termLength);
  var endDateObject;

  if (document.getElementById('endDate').value) {
  endDate = document.getElementById('endDate').value;
  endDateObject = moment.utc(endDate, "YYYY-MM-DD");
} else {
  endDateObject = moment.utc(startDate);
  endDateObject.add(termLength, "months").subtract(1, "day");
}  endDate = endDateObject.format('YYYY MM DD');
return {endDateObject, endDate}
}
