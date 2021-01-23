function recursiveCall(n){
    if(n==0 || n==1){
        return 1;
    }
    return n * recursiveCall(n-1);
}
let out = recursiveCall(10);
console.log(out);