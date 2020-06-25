// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = "*") {
    return function cool(param = "special") {
        return `You are ${str}${param}${str}!`
    }
}

// let encouragingPromptFunction = wrapAdjective("!!!")
// new Object = Calculator 

const Calculator = {
    add: function add(num1, num2) {
        return num1 + num2
    },
    subtract: function subtract(num1, num2) {
        return num1 - num2
    },
    multiply: function multiply(num1, num2) {
        return num1 * num2
    },
    divide: function divide(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(i, arr) {
    let count = i
    arr.forEach(element => {
        count = element(count)
    });
    return count
}




