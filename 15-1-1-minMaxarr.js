function minMax(arr) {
	let min = arr[0];
	let max = arr[0];
	for(let i=0; i<arr.length; i++){
		let element = arr[i];
		if(element<min){
            min = element;
            console.log("inside-min: ",min);
		}if(element>max){
            max = element;
            console.log("Inside-max: ",max);
        }
    }
    return [min,max];
}
console.log("OutPut",minMax([1,3,5,4,10]));