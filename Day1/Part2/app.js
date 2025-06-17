//Example 1:
// let j=50;
// let gj=0.1;
// let f=70;
// let gf=0.05;
// let j1 = j + gj*j;
// let f1 = f + gf*f;
// console.log("Jhon's final bill is "+(j1+f1));

// function calculateJandF(){
//     let j=50,gj=0.1,f=70,gf=0.05;
//     let j1 = j + gj*j;
//     let f1 = f + gf*f;
//     console.log("Jhon's final bill is "+(j1+f1));
// }
// calculateJandF();

// during memoization it will tell how many times the function is called, eg: function is called 2 times then memoization will tell that function is called 2 times.
// function declaration is hoisted but function expression is not hoisted meaning we can call function declaration before declaring it but we can't call function expression before declaring it.
// fOO is a concept where we call a function inside another function.

// Example 2:
// function calculateJuiceandFruit(juice,gstofjuice,fruit,gstoffruit){
//     let juice1 = juice + gstofjuice*juice;
//     let fruit1 = fruit + gstoffruit*fruit;
//     let finalbillwithgst = juice1+fruit1;
//     console.log("Juice's Price with gst"+(juice1));
//     console.log("Fruit's Price with gst"+(fruit1));
//     console.log("Final Bill with gst"+(finalbillwithgst));
//     document.getElementById("juiceBill").innerText = "₹" + juice1.toFixed(2);
//     document.getElementById("fruitBill").innerText = "₹" + fruit1.toFixed(2);
//     document.getElementById("totalBill").innerText = "₹" + finalbillwithgst.toFixed(2);
// }
// calculateJuiceandFruit(50,0.1,70,0.05);

//Example 3:
// Function to calculate final bill
// function calculatebill(price, gst) {
//     // price: base price, gst: tax percentage as decimal
//     let finalbill = price + gst * price;
//     return finalbill;
// }

// // Function to print bill
// function bill(name, amount) {
//     console.log(name + " has to pay ₹" + amount.toFixed(2));
//     console.log("Thank you!");
// }

// Calling the functions
// let res1 = calculatebill(100, 0.1); // 10% GST on 100 = 110
// bill("John", res1);

// Example 4:
// Function assignment
printbill();

const printbill = function calculatebill(){
    console.log("Bill is printed");
}
