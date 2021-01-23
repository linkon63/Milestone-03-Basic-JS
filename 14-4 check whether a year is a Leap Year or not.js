///14-4 check whether a year is a Leap Year or not

function isLeapYear(year){
    const remainder = year % 4;
    if (remainder == 0 && year%100 != 0 || year&400 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isLeapYear(2020));