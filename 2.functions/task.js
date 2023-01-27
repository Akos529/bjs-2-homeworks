function getArrayParams(...arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min){
      min = arr[i];
    }
  }

  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr [i];
  }

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr [i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max-min;
  if (difference === -Infinity){
    return 0;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ==0){
      sumEvenElement += arr[i];
    } else{
      sumOddElement += arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ==0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  let average = sumEvenElement / countEvenElement;
  if (isNaN(average)){
    return 0;
  }
  return average;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult){
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
