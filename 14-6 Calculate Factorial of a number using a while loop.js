function factValue(n){
    let factSum = 1; 
    if(n == 0){
        return factSum;
    }else{
        let i = 1;
        while(i<=n){
            factSum = factSum*i;
            i++;
        }return factSum;
    }
}
const factNumberIs = factValue(6);
console.log(factNumberIs);