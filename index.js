function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(task="go to the office") {
  return `This Monday, I will ${task}.`
}
mondayWork()

function wrapAdjective(flair="*") {
  return function(str="special") {
    return `You are ${flair}${str}${flair}!`
  }
}

let Calculator = {
  add(num1, num2) {
    return num1 + num2
  },
  subtract(num1, num2) {
    return num1 - num2
  },
  multiply(num1, num2) {
    return num1 * num2
  },
  divide(num1, num2) {
    return num1 / num2
  }
}

// The functions this integer will go through
// function(a){ return a * 2 },
// function(a){ return a + 1000},
// function(a){ return a % 7 }

function actionApplyer(int, arr) {
  if (arr.length >= 1) {
    arr.forEach(func => {
      int = func(int)
    })
  }
  return int
}
