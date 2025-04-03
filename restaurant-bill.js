let burger = 8.50;
let fries = 3.25;
let soda = 2.00;
let dessert = 5.75;


let tax_rate = 0.07;
let service_charge = 0.10;
let numberOfPeople = 4;



let total = burger + fries + soda + dessert;
console.log("The Total is : " +total +" $ "); // 19.50


let serviceCharge = total * service_charge;
console.log("Service Charge : " +serviceCharge +" $ ");

let totalWithService = total + serviceCharge;
console.log("Total with Service Charge : " +totalWithService +" $ ");

let tax = totalWithService * tax_rate;
console.log("Tax Amount : " +tax +" $ ");
let finalTotal = totalWithService + tax;
console.log("Final Total : " +finalTotal +" $ ");

let amountPerPerson = finalTotal / numberOfPeople;
console.log("Amount Per Person : " +amountPerPerson +" $ ");

