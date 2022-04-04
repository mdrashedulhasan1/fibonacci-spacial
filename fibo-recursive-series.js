function fibonacci(n){
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1]
    }
    else{
        var fibo = fibonacci(n-1); // [0,1,1,2,3]
        var nextElement = fibo[n-1]+fibo[n-2]; //5
        fibo.push(nextElement);
        return fibo;
    }
}
var fiboResult = fibonacci(5);
console.log(fiboResult);