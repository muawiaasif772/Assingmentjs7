// Write down benefits and drawback of promises.
// promises sy code ki read abiliy bahr jati ha
// or is sy easily error handling achy sy hoti ha
// promise ayncronus or suncronus ki failure ki success or failure k bary btata ha
let myPromise=new Promise(function(resolve,reject){
    let a=10
if(a<15){
    resolve('yes value of "a" is less than 15')
}
else{
    reject('value of "a" is  not less than 15')
}
})
// What are most important callbacks in promise
// then,catch, finally are most important callback in promisses
myPromise.then(res=>console.log(res)).catch(err=>console.error(err))
.finally(()=>{
    console.log('promise is complete')
})

// How to intialize promise and how to resolve it
// promise initialize with new  keyword 
let myPromise2=new Promise(function(resolve,reject){
    let a=10
if(a<15){
    resolve('yes value of "a" is less than 15')
}
else{
    reject('value of "a" is  not less than 15')
}
})
// How to handle errors while using promise
let errorHandling=new Promise(function divideNumbers(divider,diviser){
    try{
         divider=window.prompt('enter divider')
         diviser=window.prompt("enter diviser")
        let result=divider/diviser;
        if(diviser==0){
            throw new Error("you can't divided by zero")
        }
        console.log(result)

    }
    catch(error){
        console.error(error)

    }})

    // Initialize a function called goOnVacation, It should take a random number and resolve or reject this decision on the basis of input, If number is even it should resolve after 3 second thinking otherwise if its odd number input it should reject immediately

    function goOnVacation() {
        return new Promise((resolve, reject) => {
            let randomNumber = Math.trunc(Math.random() * 20 + 1);
            console.log(randomNumber);
    
            if (randomNumber % 2 === 0) {
                setTimeout(() => {
                    resolve('This is even');
                }, 3000);
            } else {
                reject('This is an odd number');
            }
        });
    }
    
    goOnVacation()
        .then(res => console.log(res))
        .catch(err => console.error(err));
    
    
