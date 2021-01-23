function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    let answer = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) alice++;
        if (a[i] < b[i]) bob++;
    }
    answer[0] = alice;
    answer[1] = bob;
    return answer;
}
let arrOne = [1,2,3,4,5];
let arrTwo = [5,3,5,4,5];
let op = compareTriplets(arrOne,arrTwo);
console.log(op);