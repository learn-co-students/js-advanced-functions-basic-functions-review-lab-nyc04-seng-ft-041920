function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(string="go to the office"){
  return `This Monday, I will ${string}.`
}

function wrapAdjective(flair="*"){
  return function(adjective="special"){
    return `You are ${flair}${adjective}${flair}!`
  }
}

const Calculator = {
  add: function(num1, num2){
    return num1 + num2
  },
  subtract: function(num1, num2){
    return num1 - num2
  },
  multiply: function(num1, num2){
    return num1 * num2
  },
  divide: function(num1, num2){
    return num1 / num2
  }
}

function actionApplyer(int, funcArr){
  for (let i = 0; i < funcArr.length; i++){
    int = funcArr[i](int)
  }
  return int
}