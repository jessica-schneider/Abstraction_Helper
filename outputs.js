var buttonPress = document.getElementById("btn");
addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calculateKeyTerms();
  }
});

function calculateKeyTerms() {
  document.getElementById('totalMonthsOutput').innerHTML = calculateMonthsTerm();
  document.getElementById('monthsPostAdopt').innerHTML = calculateMonthsAdoption();
  document.getElementById('numberPayments').innerHTML = calculateNumberPayments();
  document.getElementById('endDateOutput').innerHTML = formatEndDateObject();
  document.getElementById('lastPmtOutput').innerHTML = calculateLastPayment();
}