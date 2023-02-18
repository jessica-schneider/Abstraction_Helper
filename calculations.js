function calculateMonthsTerm() {
  var { startDate } = getStartDateInputs();
  var {endDate } = getEndDateInputs();
  var startDateObject = moment.utc(startDate);
  var endDateObject = moment.utc(endDate, "YYYY-MM-DD");
  var monthsDiffInitialTerm = endDateObject.diff(startDateObject, 'months') + 1;
  return monthsDiffInitialTerm;
}

function calculateMonthsAdoption() {
  var { adoptDate } = getAdoptDateInputs();
  var {endDate } = getEndDateInputs();
  // var { startDate } = getStartDateInputs();
  // var startDateObject = moment.utc(startDate);
  var monthsDiffAdoption;
  var adoptDateObject = moment.utc(adoptDate, "YYYY-MM-DD");
  var endDateObject = moment.utc(endDate, "YYYY-MM-DD"); 
  // if (startDateObject.date() >1) {
  //   monthsDiffAdoption = endDateObject.diff(adoptDateObject, 'months');
  // } else {
  monthsDiffAdoption = endDateObject.diff(adoptDateObject, 'months') +1;
  // }
  return monthsDiffAdoption;
}

function calculateNumberPayments() {
  var { startDate } = getStartDateInputs();
  var startDateObject = moment.utc(startDate);
  let numberOfPayments = calculateMonthsAdoption();
  let paymentDayOfMonth = startDateObject.date();
  if (paymentDayOfMonth > 1) {
    return numberOfPayments - 1;
  } else {
    return numberOfPayments;
  }
}

function calculateLastPayment() {
  var { startDate } = getStartDateInputs();
  var {endDate} = getEndDateInputs();
  var startDateObject = moment.utc(startDate);
  var endDateObject = moment.utc(endDate, "YYYY-MM-DD");
  var endMonth = endDateObject.month();
  var lastPaymentDate = moment.utc(endDate, "YYYY-MM-DD");
  if (startDateObject.date() > 1) {
  lastPaymentDate.month(endMonth-1).date(startDateObject.date() -1);
} else {
  lastPaymentDate.month(endMonth).date(1);
}
return lastPaymentDate.format('MMMM D, YYYY');
}

function formatEndDate() {
  var {endDate} = getEndDateInputs();
  var endDateObject = moment.utc(endDate, "YYYY-MM-DD");
  return endDateObject.format("MMMM D, YYYY");
}