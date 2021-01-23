// Problem 1
// function addPluse(number) {
//     number += 1;
//     return number;
// }
// console.log(addPluse(-1));

// let arr =[1,2,3,4];
// console.log(arr);
// let lastElement = arr.pop();
// console.log(arr);
// let arrUpdate = arr.unshift(lastElement);

// console.log(lastElement);
// console.log(arr);



// var arr =  [1, 2, 3, 4, 5];
 
// for (var i = arr.length - 1; i >= 0; i--) {
//     (arr[i]);
// }

//Array revarse problems"""""

// function rev(arr) {
// 	let rev = [];
// 	for(let i=0; i<arr.length; i++){
// 		let temp = arr[i];
// 		rev = temp + rev;
// 	}return [rev];
// }
// let op = rev([1,2,3,4]);
// console.log(op);


//Soltion of array revarse

function reverse(arr) {
	let result = [];
	for (let i = arr.length -1; i > -1; i--) {
		result.push(arr[i]);
	}
	
	return result;
}
let op = reverse([1,2,3,4,5,6]);
console.log(op);