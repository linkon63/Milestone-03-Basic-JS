function fibonacci(n){
    var arr = [0,1];
    for(var i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2]; //*** */ there i did mistake;--**Second arry i didn't write**
    }
    return arr;
}
var result = fibonacci(12);
console.log(result);