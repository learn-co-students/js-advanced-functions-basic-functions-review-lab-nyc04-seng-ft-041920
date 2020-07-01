// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function  wrapAdjective(outer = '*') {
  return function (inner ='special') {
    return `You are ${outer}${inner}${outer}!`
  } 
}

const Calculator = {
  add: function (num) {
    return num += 3
  },
  subtract: function (num) {
    return num -= 3
  },
  multiply: function (num) {
    return num *= 3
  }, 
  divide: function (num) {
    return num /= 5
  },
}

function actionApplyer(num, arrFunc) {
  
  for(let i=0; i < arrFunc.length; i++){
    num = arrFunc[i](num)
  }
  return num
  
}