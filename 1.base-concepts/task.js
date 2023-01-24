"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - (4*a*c);
  if (d > 0){
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
    return arr;
  }   
  if (d === 0){
    arr[0] = -b/(2*a);
    return arr;
  } 
  return arr;

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)){
    return false;
  }
  if (isNaN(contribution)){
    return false;
  }
  if (isNaN(amount)){
    return false;
  }
  if (isNaN(countMonths)){
    return false;
  }
  let monthlyPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
  let totalPayment = Number((monthlyPayment * countMonths).toFixed(2));
  return totalPayment;
}