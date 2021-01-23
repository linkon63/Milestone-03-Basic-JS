// // // var num = [120,15,154,64,154,1548,45,12,14,15];
// // // console.log("Define Array:"+num);

// // // var position = num.indexOf(154);
// // // console.log(position);

// // // num[2]= 15;
// // // console.log("Updating Array:"+num);

// // // var outnumber = num[5];
// // // console.log("Out Number from Array:" + outnumber);
// // // //
// // // console.log(num);
// // // console.log(num.length);
// // // num.push(12,15,16);
// // // console.log(num);
// // // console.log(num.length);
// // // num.pop();
// // // console.log(num)
// // // console.log(num.length);

// // // let array = [12,15,13,16];
// // // console.log(array);
// // // array.unshift(1,2,3);
// // // console.log(array);

// // // let arrayTwo = [1,2,3,4,5,6,7,8];
// // // arrayTwo.unshift(0);
// // // arrayTwo.unshift(-1);
// // // arrayTwo.unshift(-2);
// // // console.log(arrayTwo);

// // // arrayTwo.shift();
// // // console.log(arrayTwo)
// // // let cutArray = arrayTwo.slice(2,5);
// // // console.log(cutArray);
// // // console.log("array before prntCut:"+array);
// // // let prmntCutOfArray = array.splice(0,4);
// // // console.log(array);

// // // var numbers = [1,2,3,4,5];

// // // var result = numbers.slice(1,3);

// // // console.log(result);
// // // let num = 0;
// // //  while(num <=15){
// // //      console.log("NumberIs: "+num);
// // //      num++;
// // //  }
// // //for loop

// // // let num = [1,2,3,4,5,6,7,8,9,7,8,9,7,4,5,6,1,2,3];
// // // var len = num.length();
// // // console.log(len);

// // // for(var i=0; i<num.length(),i++;){
// // //     console.log(num[i]);
// // // }


// // // let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// // // for (var i = 0; i< arr.length ; i++){
// // //     var element = arr[i];
// // //     console.log("Array Number:"+i+"--"+ element);
// // // }
// // let num = 2;

// // switch(num){
// //     case 1:
// //     console.log("u are One");
// //     break;
// //     case 2: console.log("two");
// //     break;
// //     case 10:
// //     case 9: //multiline declaration
// //     case 8:
// //         console.log("nine,ten,eight");
// //         break;
// //     default:
// //         console.log("Nothing ");
// //         break;    
// // }

// // function girlFriends(){
// //     let arr = ['Priya','Rimu','Sadia','Leana','Aisha','Ripa','Priyanka','Shila','NaJu','Akhi','Liza','etc'];
// //     for (let i = 0; i < arr.length; i++) {
// //         const element = arr[i];
// //         console.log("I love you :" + element);
// //     }
// // }
// // console.log("See my Girlfriend Name:");
// // girlFriends();
// // console.log("Will you be my Wife Promi Milk House")
// //---------------------------------------
// // function doubleIT(num){
// //     for (let i = 1; i < 15 ; i++) {
// //         var num = num * 10; 
// //         console.log(num);       
// //     }
// //     return num;
// // }   

// // var functn = doubleIT(10);

// // console.log(functn);
// //----------------------------------

// // function add(numOne,numTwo){
// //     result = numOne + numTwo ;
// //     return result;
// // }
// // var total = add(50,60);
// // console.log("Your Total Value of: " + total );

// //Objects

// // var gfOne = { id :001, name:"Priya" , pain:"True", age: 17 }; //Obj-1
// // var gfTwo = {id: 002, name:"Priyanka", pain:"False", age:20};//Obj-2
// // var gfthree = {id: 002, name:"Aisha Era", pain:"Loading", age:18};//Obj-3

// // var gfPain = gfOne.pain; //Out method -1
// // var gfPainTwo = gfTwo["pain"]; //Out method -2
// // var loadingVar = "pain"; //Out method 3.1
// // var gfThree = gfthree[loadingVar];//Out method -3.2
// // console.log("You get:" + gfPain);
// // console.log("You get:" + gfPainTwo);
// // console.log("You get:" + gfThree);

// // console.log("Your Objects",gfOne,gfTwo,gfthree);
// // //updated
// // gfOne.id = 000;
// // console.log("Updated gfOne id:",gfOne);
// // gfOne["age"] = 20;
// // console.log("Updated gfOne age:",gfOne);
// // gfOne["PresentBF"] = "JOY";
// // console.log("Updated gfOne Boyfriend:",gfOne);






// // var num = [120,15,154,64,154,1548,45,12,14,15];
// // console.log("Define Array:"+num);

// // var position = num.indexOf(154);
// // console.log(position);

// // num[2]= 15;
// // console.log("Updating Array:"+num);

// // var outnumber = num[5];
// // console.log("Out Number from Array:" + outnumber);
// // //---------------
// // var numbers = [1,2,3,4,5];

// // var result = numbers.slice(-1,3);

// // console.log("Slice is"+result)



// var myStr = "I am a \"double quoted\" string inside \"double quotes\"" ; // Change this line


function largestNumber(numbers){
        let larger = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        console.log(element);
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
let arr = [12,54,13,4,6,45,78,45,6,98];
var output = largestNumber([10,12,5]);
console.log("Out:" ,output);
var output2 = largestNumber(arr);
console.log("outArray=",output2);