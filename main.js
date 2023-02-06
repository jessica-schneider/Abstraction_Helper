function calculateDifference() {
  let startDate = document.getElementById('startDate').value;
  let endDate = document.getElementById('endDate').value;

  let startDateObject = new Date(startDate);
  let endDateObject = new Date(endDate);
  let commDateObject = new Date('01/01/2022')

  let startMonth = startDateObject.getMonth();
  let endMonth = endDateObject.getMonth();
  let commMonth = commDateObject.getMonth();

  let startYear = startDateObject.getFullYear();
  let endYear = endDateObject.getFullYear();
  let commYear = commDateObject.getFullYear();

  let termMonthsDifference = endMonth - startMonth;
  let termYearsDifference = endYear - startYear;
  let termTotalMonthsDifference = termMonthsDifference + termYearsDifference * 12

  let commMonthsDifference = endMonth - commMonth;
  let commYearsDifference = endYear - commYear;
  let commTotalMonthsDifference = commMonthsDifference + commYearsDifference * 12;

  document.getElementById('detailsOutput').innerHTML = termTotalMonthsDifference + ' months total term, ' + ' expense is recognized in ' + (commTotalMonthsDifference + 1) + ' months following 1/1/22, ' + commTotalMonthsDifference + ' base rent payments are made after 1/1/22'
}

function calculateEndDate() {
  let startDate = document.getElementById('startDate').value;
  let startDateObject = new Date(startDate);

  let termLength = document.getElementById('termLength').value;

  let startMonth = startDateObject.getMonth();
  let endMonth = startMonth + termLength;

  let endDateObject = new Date(startDate);
  endDateObject.setMonth(endMonth);

  document.getElementById('endDateOutput').innerHTML = startDateObject;
}


function testCalculateEndDate() {
  let startDate = document.getElementById('startDate').value;
  let termLength = document.getElementById('termLength').value; 
  termLength = parseInt(termLength)
  let startDateObject = new Date(startDate);
  let startMonth = startDateObject.getUTCMonth();
  let endDateObject = startDateObject;
  let endMonth = (startMonth + termLength);
  endDateObject.setUTCMonth(endMonth);

  document.getElementById('endDateOutput').innerHTML = endDateObject.toDateString();

}