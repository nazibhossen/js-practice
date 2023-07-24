const readline = require('readline');

function calFun(num1, op, num2) {
    if (op === '+') {
        return num1 + num2;
    } else if (op === '-') {
        return num1 - num2;
    } else if (op === '*') {
        return num1 * num2;
    } else if (op === '/') {
        return num1 / num2;
    } else {
        console.log('Wrong input');
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the 1st value: ", function(x) {
    rl.question("Use any Operator '+', '-', '*', '/': ", function(z) {
        rl.question("Enter the 2nd value: ", function(y) {
            console.log('The ans is ', calFun(parseFloat(x), z, parseFloat(y)));
            rl.close();
        });
    });
});
