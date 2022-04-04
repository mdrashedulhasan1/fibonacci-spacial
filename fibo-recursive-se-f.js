// [0, 1, 1, 2, 3, 5]
function fibonacci(n){ //5
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
var fiboResult = fibonacci(5);
console.log(fiboResult);
// [0, 1, 1, 2, 3, 5]