// Write a function that takes an array of numbers and a callback function as arguments. The callback function should determine whether each number is even or odd. The main function should return a new array containing the result of the callback applied to each element.
function isEven(number){
return number%2==0?true:false
}

function main(array,callback){
    let result=[]
    for( let i=0;i<array.length;i++){
       result.push(callback(array[i]))
    }
    return result
}
let number=[2,3,5,6,79,10,11,12]
let res=main(number,isEven)
console.log(res)

// Write a function that takes an array and a callback function as arguments. The callback function should act as a filtering condition, and the main function should return a new array containing only the elements that satisfy the condition specified by the callback.
function returnOdd(number) {
    if (number % 2 === 1) {
        return number; 
    }
}

function returnnewArray(array,callback){
    let res=[];
    for(let i=0;i<array.length;i++){
    let value=callback(array[i])
    if(value!==undefined){
        res.push(value)
    }
    }
    return res
}
let numbers = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 13,16,17];
let oddNumbers = returnnewArray(numbers, returnOdd);
console.log(oddNumbers);

function toUpperCase(str) {
return str.toUpperCase();

}

function mapToUpperCase(arr, callback) {
let uperCaseArray=[]
for(let i=0;i<arr.length;i++){
    uperCaseArray.push(callback(arr[i]))
}
return uperCaseArray
}


const words = ['hello', 'world', 'javascript']; 
console.log(mapToUpperCase(words, toUpperCase));


