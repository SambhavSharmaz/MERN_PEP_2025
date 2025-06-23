console.log("Array Methods")

// Displays the elements and its index:
//m1:
const arr = ["sam","hi","how","are","you"];
// for(let i=0;i<arr.length;i++){
//     let ele = arr[i];
//     console.log(ele,i)
// }

// Same output but different method
//m2:
// for(let i in arr){
//     console.log(arr[i],i);
//     console.log(i);
// }

//m3:
// for(let i of arr){
//     // console.log(arr[i],i);
//     console.log(i);
// }

// Foreach supports only callback function

const infinite = ()=>{
    console.log("Infinite")
}
arr.forEach(infinite)

//Ways of writing foreach:
//1)
arr.forEach((a,b)=>{
    a=10,b=40;
    console.log(a+b)
})
//2)
arr.forEach(function(a,b){
    a=10,b=40;
    console.log(a+b)
})
//3)
arr.forEach((a,b)=>console.log(a+b))




