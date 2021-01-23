//14-2 without arrray
function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var own = inchToFeet(256);
console.log(own);
//Using Array
var arr = [256,126,145,896];
var ownTow = inchToFeet(arr[0]);// First Element Value
console.log(ownTow);