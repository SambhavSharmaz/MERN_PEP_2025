console.log("Super🦹man")

//simple arr with vechile names
const arr = ['tata','mahindra','hyundai','maruti','ford','bmw']
console.log(arr);
//READ
//1.
// const company =arr[1];
// console.log(company)

//2.
const [a,b,c] = arr;
console.log(b,c);

//3.
const arr1 = ['nissan','mitsubishi','volvo','honda']
const [x,y,z]= arr1;
console.log(arr1);

//4. this will lead to have 6 empty spaces in your array which is not good
arr1[10] = 'skoda';
console.log(arr1);

//basic array methods:

// Array length	Returns the length (size) of an array
// Array toString()	Converts an array to a comma separated string of values
// Array at()	Returns an indexed element from an array
// Array join()	Joins all array elements into a string
// Array pop()	Removes the last element from an array
// Array push()	Adds a new element to an array
// Array shift()	Removes the first array element
// Array unshift()	Adds a new element at the beginning of an array
// Array delete()	Creates undefined holes in the array
// Array concat()	Creates a new array by merging existing arrays
// Array copyWithin()	Copies array elements to another position in the array
// Array flat()	Creates a new array from sub-array elements
// Array slice()	Slices out a part of an array
// Array splice()	Adds new items to an array
// Array toSpliced()	Adds new items to an array in a new array

//1) push and pop:
arr.push('mesarati');
console.log("push : " + arr);
arr.pop();
console.log("pop : " + arr);

//2) shift and unshift :
arr.shift();
console.log("shift : " + arr);
arr.unshift('skoda');
console.log("unshift : " + arr);

//3) slice and slice :
const arr2 = arr.slice(1,1);
console.log("remove slice : " + arr);
const arr3 = arr.splice(0,0,"kia");
console.log("add slice : " + arr);

//4) length:
console.log("length : " + arr.length);

//5) toString:
console.log("toString : " + arr.toString());

//6) at:
console.log("At given position: " + arr.at(1));

//7) concat:
const arr4 = arr.concat(arr1);
console.log("concat : " + arr4);

//8) join:
console.log("join : " + arr.join(" | "));

//9) delete: 
delete arr[0];

//10) flat:
const arr5 = arr.flat();
console.log("flat : " + arr5);

//11) copyWithin:
const arr6 = arr.copyWithin(0,0);
console.log("copyWithin : " + arr6);

//12) toSpliced:
const arr7 = arr.toSpliced(0,0,"kia");
console.log("toSpliced : " + arr7);

//Data type using ===;
// if 10 === 10, its true
// if 10 === "10", its false why? because 10 is a number and "10" is a string
// if 10 === 10.0, its true why? because 10 and 10.0 are both numbers
// if 10 === "10.0", its false why? because 10 is a number and "10.0" is a string
// if "10" === "10", its true why? because both are strings

const person = {
    name: "John",
}

if({name:"john"}=={name:"john"}){
    console.log("true")
}
else{
    console.log("false")
}
// why false: because the two objects are different even though they have the same properties and values

if({}=={}){
    console.log("true")
}
else{
    console.log("false")
}
// same for this

// Array Search Methods
// Array indexOf()	Returns the first position of an element value
// Array lastIndexOf()	Returns the last position of an element value
// Array includes()	Returns true if an element value is present in an array
// Array find()	Returns the value of the first element that passes a test
// Array findIndex()	Returns the index of the first element that passes a test
// Array findLast()	Returns the value of the last element that passes a test
// Array findLastIndex()	Returns the index of the last element that passes a test

//1) indexof and lastindexof:
const names = ["james","john","jane","jim","joe","jimmy","jack"];
console.log(names.indexOf("jim"));
console.log(names.lastIndexOf("jim"));

if(names.indexOf("james")!=-1){
    console.log("james is present")
}
else{
    console.log("james is not present")
}
// if i didnt include ===-1 or !=-1, it will always print "james is absent" why: because names.indexOf("james") is 0, and 0 is falsy, 
// so it wrongly goes to the else.

//2) includes:
console.log(names.includes("jim"));

//3) find and findindex:
const myfun = (a) => a === "ka";

const arr10 = ["al", "af", "fd", "ka", "lp"];
const elem = arr10.find(myfun);

console.log(elem); // Output: "ka"

// it will be able to find the first element that matches the condition
const arr12=[
    {names:"john",city:"jalandhar"},
    {names:"jhon",city:"Delhi"},
];
const myfun1 = (a) => {
    // above line is the same as this: function myfun1(a){
    // return a == "john"
    //}
    if(a.names=== "john") return true;
    else return false;
}
const elem1 = arr12.find(myfun1);
console.log(elem1);

// Array Iteration Methods
// Array iteration methods operate on every array item:

// Array forEach	Calls a function for each array element
// Array map()	Creates a new array by performing a function on each element
// Array flatMap()	Creates a new array by mapping and flattening all elements
// Array filter()	Creates a new array with all elements that pass a test
// Array reduce()	Runs a function on each element to produce a single value
// Array reduceRight()	Runs a function on each element to produce a single value
// Array every()	Returns true if every elements pass a test
// Array some()	Returns true if some elements pass a test
// Array from()	Returns an array object from an iterable object
// Array keys()	Returns an array with the keys of an array
// Array entries()	Returns an array with the entries of an array
// Array with()	Update elements without altering the original array
// Array Spread (...)	Expands an array into individual elements
// Array Rest (...)	Destruct an array and collect the leftovers

const array1 = [{
    name: "john",
    city: "jalandhar",
    marks: 30,
},
{
    name: "jane",
    city: "delhi",
    marks: 56,
},
{
    name: "jim",
    city: "mumbai",
    marks: 87,
}];

const myfun10 = (ele)=>{
    if(ele.marks>40) {
        return {...ele,remarks:"pass"};
    }
    else{
        return {...ele,remarks:"fail"};
    }
}

const arr11 = array1.map(myfun10);
console.log(arr11);

