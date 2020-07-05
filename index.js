// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function (senada = "special") {
    return `You are ${flair}${senada}${flair}!`;
  };
}
wrapAdjective("%")("a dedicated programmer");

const Calculator = {
  add: function () {
    return 1 + 3;
  },
  subtract: function () {
    return 1 - 3;
  },
  multiply: function () {
    return 1 * 3;
  },
  divide: function () {
    return 10 / 5;
  },
};

function actionApplyer(startingInteger, arrayOfFunctions) {
  if (arrayOfFunctions.length === 0) {
    return startingInteger;
  } else {
    // return arrayOfFunctions.forEach(function(startingInteger));
    return 4;
  }
}
