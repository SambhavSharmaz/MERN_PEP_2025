console.log("obj and arr")

//it is hectic to create multiple variables for same type of data
// const cse01N="sambhav sharma";
// const cse01C="B.Tech CSE";
// const cse01A=21;

// const cse02N="maurya sharma";
// const cse02C="11th";
// const cse02A=16;

// so instead create a objects(it stores key value pairs, and keys should be unique, and always a key or a symbol) 
// const CSE01 = {
//     name: "sambhav",
//     class: "B.Tech CSE",
//     age: 21,
// };
// const CSE02 = {
//     name: "maurya",
//     class: "11th A",
//     age: 16,
// }
// console.log(CSE01);
// console.log(CSE02);

// //to access the value of a key in an object
// console.log(CSE01.name);
// console.log(CSE01["name"]);

// //to add if it doesnt exist or updates the value of a key in an object
// CSE01.name = "Raghav Verma";
// console.log(CSE01);

// //to delete a key value pair in an object
// delete CSE01.name;
// console.log(CSE01);

//so when a key is deleted, it would display the name as it is in previous objects but when clicked on the expand the name has been deleted even though the name is 
// not deleted in the previous objects, why? because the object is passed by reference and not by value, so when we pass the object to a function, we are passing the
// reference of the object and not the value of the object, so when we change the value of the object in the function, it changes the value of the object in the main program

//primitives(pre-defined by the programming language. The size and type of variable values are specified, and it has no additional methods) 
// and non-primitives( not actually defined by the programming language but are created by the programmer.) : 
// 1) primitives are immutable and non-primitives are mutable
// 2) primitives are stored in stack and non-primitives are stored in heap
// 3) primitives are copied by value and non-primitives are copied by reference

// stack and heap memory allocation:
// stack memory is used to store the values of variables and function calls
// heap memory is used to store the values of objects and arrays
// stack memory is faster than heap memory
// stack memory is limited and heap memory is unlimited
// in stack we dont need to deallocate memory but in heap we need to deallocate memory

// we can have var name using alphabets like A,b; numbers like 1,2; and special characters like @,#,$,%,&,* etc.
// but the corrects method to write is that the first character should be a letter or an underscore and the rest of the characters can be a letter, a number, a symbol or an underscore

// const person_he_100 = {
//     name: "sambhav",
//     height: 1.8288,
//     weight: 85,
//     college: "LPU",
//     age: 21,
//     gender: "M",
//     bloodGroup: "B+",
//     address: "PHG",
//     // it wont work due to the arrows as the are point not to the person_he_100 but to the window object, instead replace it with function(),why?
//     // because the arrow functions do not have their own this keyword, they inherit the this keyword from the parent scope, in this case the window object
//     // getBMI:()=>{
//     //     console.log(this.weight/this.height**2);
//     // }
//     getBMI: function () {
//         const bmi = this.weight / this.height ** 2;
//         console.log(this.name + "'s" + " BMI is " + bmi);
//         if (bmi < 18.5) {
//             console.log("you are Underweight");
//         }
//         else if (bmi >= 18.5 && bmi <= 24.9) {
//             console.log("you are in normal range");
//         }
//         else if (bmi >= 25 && bmi <= 30) {
//             console.log("you are Overweight");
//         }
//         else {
//             console.log("you are Obese");
//         }
//     }
// }
// person_he_100.getBMI();

// const allkeys = Object.keys(person_he_100);
// console.log(allkeys);
// const allvalues = Object.values(person_he_100);
// console.log(allvalues);
// const allentries = Object.entries(person_he_100);
// console.log(allentries);

//if i try to call the rest of the parameters in the object, i wont be able to call them as they are not defined in the object, so i need to define them
// in the function named getBMI 

// const person = {
//     name: "sambhav",
//     height: 1.8288,
//     weight: 85,
//     college: "LPU",
//     age: 21,
//     gender: "M",
//     bloodGroup: "B+",
//     address: "PHG",
// }

// const whichkey=prompt("What value do you want to know?");
// console.log("which key do you want: ",whichkey);
// const promptdes = person[whichkey];// this will give the value of the key which is entered by the user
// console.log("Displayed :",promptdes);

// string is immuatble and non-primitive, we can change the value of the string but we cant change the string itself as address is created anew each time we change the string 
// during which the old address is deleted and the new address is created

// const person = {
//     name: "sambhav",
//     height: 1.8288,
//     weight: 85,
//     college: "LPU",
//     age: 21,
//     gender: "M",
//     bloodGroup: "B+",
//     address: "PHG",
// };

// const person1 = person;
// person.name = "sambhav kumar";
// person1.name= "sambhav Bhumra";
// console.log(person.name);
// console.log(person1.name);

// during the above execution of code, the object will display the name sambhav kumar but since the speed is too fast it will update again to sambhav bhumra, why? 
// because the object is not copied by value but by reference, so the object is pointing to the same address in the memory, so when we change the value of the object, it changes the value of the object in the main program

// const person = {
//     name: "sambhav",
//     height: 1.8288,
//     weight: 85,
//     college: "LPU",
//     age: 21,
//     gender: "M",
//     bloodGroup: "B+",
//     address: "PHG",
// };

// // this is de-structuring, it is used to extract the values of the object and assign them to variables
// const {name} = person;
// console.log(name);
// const {height, weight} = person;
// console.log(height, weight);

// ... are caller spread and rest operator, it is used to spread the values of the object or array
// const person1 = {...person};
// console.log(person);

const person = {
    name: "sambhav",
    height: 1.8288,
    weight: 85,
    college:{
        name: "LPU",
        location: "PHG"
    },
    age: 21,
    gender: "M",
    bloodGroup: "B+",
    address: "PHG",
};

const person1 = {...person};
console.log(person1);
person1.name = "sambhav kumar";
person1.college.name = "Amity";
console.log(person1);

// using the nested object, we can access the values of the nested object by using the ... dots