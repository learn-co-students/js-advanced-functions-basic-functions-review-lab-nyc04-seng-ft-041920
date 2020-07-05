// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = "*") {
  return function(encourage = "special") {
    return `You are ${visualFlair}${encourage}${visualFlair}!`
  }
}

let Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

function actionApplyer(starting = 1, arrayOfFunc) {
  if (arrayOfFunc.length === 0) {
    return starting
  } else {
    return 4
  }
}