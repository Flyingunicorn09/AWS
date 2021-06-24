module.exports.ATaylorCh = ch;


function ch(x, n) {
    var sum = 1;

    for (i = 1, j = 2; i <= n; i++, j += 2) {

        sum += Math.pow(x, j) / factorial(j);
    }
    return sum.toFixed(4);

}

function factorial(input) {
    if(input == 1 || input ==0) {
        return input;
    } else {
        return input * factorial(input - 1);
    }
}
