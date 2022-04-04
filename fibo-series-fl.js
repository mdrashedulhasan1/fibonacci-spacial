// [0, 1, 1, 2, 3, 5]
function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var fiboResult = fibonacci(5);
console.log(fiboResult);
// [0, 1, 1, 2, 3, 5]