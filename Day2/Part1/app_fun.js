//callbacks today 17-06-2025
// Array function assignment
const printbill = (txt) =>{
    console.log("-----------------------")
    console.log("Total Bill is Rs. ",txt);
    console.log("-----------------------")
}
// printbill(100);

const printbillforfood = (txt) =>{
    console.log("-----------------------")
    console.log("Food Bill is Rs. ",txt);
    console.log("-----------------------")
}

const printbillforfoodANDdrinks = (txt) =>{
    console.log("-----------------------")
    console.log("Food and Drinks Bill is Rs. ",txt);
    console.log("-----------------------")
}

const printbilldrinksANDclothes = (txt) =>{
    console.log("-----------------------")
    console.log("Drinks and Clothes Bill is Rs. ",txt);
    console.log("-----------------------")
}

const calculatebillamountforfood=(price)=>{
    return price * 1.05;
}

const calculatebillamountforclothes=(price)=>{
    return price * 1.12;
}

const calculatebillamountfordrinks=(price)=>{
    return price * 1.20;
}

// Higher order function is a function which accepts another function as a parameter or a function which returns a function

const calculatefinalamount = (food, clothes, drinks, cb) => {
    const foodamount = calculatebillamountforfood(food);
    const clothesamount = calculatebillamountforclothes(clothes);
    const drinksamount = calculatebillamountfordrinks(drinks);
    const total = foodamount + clothesamount + drinksamount;
    cb(total);
}
calculatefinalamount(100, 200, 300, printbill);
calculatefinalamount(0, 200, 300, printbilldrinksANDclothes);
calculatefinalamount(100, 0, 0, printbillforfood);
calculatefinalamount(100, 0 , 300, printbillforfoodANDdrinks);