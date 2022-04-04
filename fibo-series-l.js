// 0, 1, 1, 2, 3, 5
var fibo = [0, 1];
for(var i= 2; i<=5; i++){
    fibo[i] = fibo[i-1]+fibo[i-2];
}
console.log(fibo);
// [0, 1, 1, 2, 3, 5]