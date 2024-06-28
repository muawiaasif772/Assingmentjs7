// Write down a function that would fetch data from a dummy json serve and code execution will wait until data from https://jsonplaceholder.typicode.com/todos is successfully fetched.
// Print the fetched response in console log
 async function test(){
return (await (fetch('https://jsonplaceholder.typicode.com/todos'))).json()
}
test().then(res=>res).then((el)=>{
console.log(el)
for( let key in el){
    console.log(el[key].title)
}
})
test()

// What is the purpose of async await?****************
// async or await  keyword javascript my asyncronus operation ko handle karny kaleay use hoty ha is sy achy sy error handling ki ja skati ha awiat or async keword ka use kar k ham agy ka code kar sakty ha bina roka wesy javascript my mostly operations syncronus hoty ha async or await ziad tar data fetch karty hovy use keay jaty ha q k server sy data ly k ana thora time leta hs isleay bina agy ka kam roky ham dono kam ek saht kar sakty ha matlub data fetch b or agy k code be execute kar sakty  ha
// ***********Why we use async await?***************
// async or await  keyword javascript my asyncronus operation ko handle karny kaleay use hoty ha is sy achy sy error handling ki ja skati ha awiat or async keword ka use kar k ham agy ka code kar sakty ha bina roka wesy javascript my mostly operations syncronus hoty ha async or await ziad tar data fetch karty hovy use keay jaty ha q k server sy data ly k ana thora time leta hs isleay bina agy ka kam roky ham dono kam ek saht kar sakty ha matlub data fetch b or agy k code be execute kar sakty  ha

//************** */ What are benefits of async await?*********
// Improved Readability and Maintainability asyn or awit sy code syncronus code ki trha lugta ha or isy asani sy pahra ja sakta ha
// Error Handling  easily ho jata ha
// callbackhill sy b bach jaty ha ham async or awit use karny sy


