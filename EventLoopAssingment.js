// **************Q1************
function delayedMessage(){
    setTimeout(()=>{
        console.log('this is an asyncronus message')
    },2000)
}
console.log('start')
delayedMessage();
console.log('End')
// output 
// start
// End
// this is an asyncronus message
// ********Q2*************
function printMessage(message,delay){
setTimeout(()=>{
    console.log(message)
},delay)
}
console.log('start')
printMessage('Delayed Message 1',2000)
printMessage('Delayed Message 2',1000)
printMessage('Delayed Message 3',3000)
console.log('End')
// output
// start
// end
// 'Delayed Message 2'
// Delayed Message 1
// Delayed Message 3

