
function calculateKeyTerms() {
  document.getElementById('totalMonthsOutput').innerHTML = calculateMonthsTerm();
  document.getElementById('monthsPostAdopt').innerHTML = calculateMonthsAdoption();
  document.getElementById('numberPayments').innerHTML = calculateNumberPayments();
  document.getElementById('endDateOutput').innerHTML = formatEndDateObject();
  document.getElementById('lastPmtOutput').innerHTML = calculateLastPayment();
}