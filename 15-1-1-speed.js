function distance(time) {
    let totalMeter = 0;
    if(time <= 10){
        totalMeter = time * 10;
    }else if(time<=20){
        let firstTenMnt = 10*10;
        let secondTenMnt = firstTenMnt + ((time - 10)*20);
        totalMeter = secondTenMnt;
    }else{
        firstTenMnt = 10*10;
        secondTenMnt = firstTenMnt + (10 *20);
        let thirdMnt = secondTenMnt + ((time - 20)*30);
        totalMeter = thirdMnt;
    }
    return totalMeter;
}
let op = distance(21);
console.log(op);