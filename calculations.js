function calculateMonthsTerm() {
  var { startMonth, startYear } = getStartDateInputs();
  var {endMonth, endYear } = getEndDateInputs();
  //calculate number of months between start date and end date
  let termMonthsDifference = endMonth - startMonth; // calc difference in month integers from start to end
  let termYearsDifference = endYear - startYear; // calc difference in year integers from start to end
  let termTotalMonthsOutput = termMonthsDifference + termYearsDifference * 12; // convert years to months and add to months integer
  return termTotalMonthsOutput;
}

function calculateMonthsAdoption() {
  var { adoptMonth, adoptYear } = getAdoptDateInputs();
  var {endMonth, endYear } = getEndDateInputs();
  //calculate number of months between 1/1/22 and end date
  let MonthsDifferenceAdopt = endMonth - adoptMonth; // calc difference in month integers from end month to 1/1/22
  let YearsDifferenceAdopt = endYear - adoptYear; // calc difference in year integers from end year to 1/1/22
  let monthsPostAdopt = MonthsDifferenceAdopt + YearsDifferenceAdopt * 12; //// convert years to months and add to months integer
  return monthsPostAdopt + 1; // returns number of months in term following 1/1/22
}

function calculateNumberPayments() {
  var { startDay } = getStartDateInputs();
  let numberOfPayments = calculateMonthsAdoption();
  if (startDay > 1) {
    return numberOfPayments - 1;
  } else {
    return numberOfPayments;
  }
}

function formatEndDateObject() {
  var {endDateObject } = getEndDateInputs();
  return endDateObject.toDateString();
}


function calculateLastPayment() {
  var { startDay } = getStartDateInputs();
  var {endDateObject, endMonth} = getEndDateInputs();
  var lastPaymentDate = new Date (endDateObject);
  if (startDay > 1) {
  lastPaymentDate.setMonth(endMonth-1);
} return lastPaymentDate.toDateString();
}
