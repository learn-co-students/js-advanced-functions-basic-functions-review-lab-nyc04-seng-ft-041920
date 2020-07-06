function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

saturdayFun();

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
};

mondayWork();

function wrapAdjective(flair="*") {
    return function(param="special") {
        return `You are ${flair}${param}${flair}!`
    }
};

let Calculator = {
    add: function add(num1, num2) {return num1 + num2}, 
    subtract: function subtract(num1, num2) {return num1 - num2}, 
    multiply: function multiply(num1, num2) {return num1 * num2}, 
    divide: function divide(num1, num2) {return num1 / num2}
}

function actionApplyer(starting_integer, array) {
    for (let i = 0; i < array.length; i++) {
        starting_integer = array[i](starting_integer)
    }
    return starting_integer
}