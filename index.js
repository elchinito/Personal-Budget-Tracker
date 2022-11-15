let weeklyExpenses = 0;
let monthlyExpenses = 0;
let annualExpenses = 0;

let i = 0;
let j = 0;
let k = 0;

while( i < weeklyExpenseQuestions.length ){
    let weeklyAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    weeklyExpenses += weeklyAnswer;
    i++;
}

while( j < monthlyExpenseQuestions.length ){
    let monthlyAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[j]));
    monthlyExpenses += monthlyAnswer;
    j++;
}

while( k < annualExpenseQuestions.length ){
    let annualAnswer = parseFloat(window.prompt(annualExpenseQuestions[k]));
    annualExpenses += annualAnswer;
    k++;
}

/*
for( let i = 0; i < weeklyExpenseQuestions.length; i++){
    let weeklyAnswer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    weeklyExpenses += weeklyAnswer;
}

for( let j = 0; j < monthlyExpenseQuestions.length; j++){
    let monthlyAnswer = parseFloat(window.prompt(monthlyExpenseQuestions[j]));
    monthlyExpenses += monthlyAnswer;
}

for( let k = 0; k < annualExpenseQuestions.length; k++){
    let annualAnswer = parseFloat(window.prompt(annualExpenseQuestions[k]));
    annualExpenses += annualAnswer;
}
*/
