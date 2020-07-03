// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = "*") {
    return function (param = "special") {
        return `You are ${str}${param}${str}!`
    }
}

const Calculator = {
    add: function (num1, num2) {
        return num1 + num2
    },
    subtract: function (num1, num2) {
        return num1 - num2
    },
    multiply: function (num1, num2) {
        return num1 * num2
    },
    divide: function (num1, num2) {
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




