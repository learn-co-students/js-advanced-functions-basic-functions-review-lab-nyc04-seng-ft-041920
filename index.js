function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(visual="*") {
    return function(str="special") {
        return `You are ${visual}${str}${visual}!`
    }
}

const Calculator = {
    add: function(a,b) {return a + b},
    subtract: function(a,b) {return a - b},
    multiply: function(a,b) {return a * b},
    divide: function(a,b) {return a / b}
}

function actionApplyer(start, arr) {
    for (let i = 0; i < arr.length; i++){
        start = arr[i](start)
    }
    return start
}
