function animalCount(depth){
    let animal = 0;
    if(depth<=10){
        animal = depth*50;
    }else if(depth<=20){
        let firstMile = 10 * 50;
        let remaining = depth - 10;
        let secondMile = remaining * 100;
        animal = firstMile + secondMile;
    }else{
        let firstMile = 10*50;
        let secondMile = 10*100;
        let remaining = depth - 20;
        let thirdMile = remaining*300;
        animal = firstMile+secondMile+thirdMile;
    }
    return animal;
}
let count = animalCount(22);
console.log(count);