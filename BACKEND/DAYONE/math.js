function Add(a,b){
    return a+b
}

function Print(a){
   return "I am " +a
}

const multiply=(a,b)=>{
    return a*b
}
const Average=(a,b,c)=>{
    return (a+b+c)/3
}

// const multiply=(...a)=>{
//     return a.reduce((acc,curr)=>{
//         return acc*curr
//     },1)
// }
module.exports={
    Add,Print,multiply,Average
};