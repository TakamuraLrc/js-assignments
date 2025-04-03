let bread =  2.50;
let milk = 3.00;    
let egg = 2.00;
let chesses = 4.50;
let apples1Kg = 5.00;
let chicken1Kg = 8.00;
let Rice1Kg = 3.50;
let butter = 2.75;
let juice = 3.35;

let tax_rate = 0.07;
let discount_rate = 0.1;


let total = bread + milk + egg + chesses + apples1Kg + chicken1Kg + Rice1Kg + butter + juice;
console.log("The Total is : " +total); // 34.25


let discount_amount = total * discount_rate;
console.log("Discount Amount : " +discount_amount );



let tax_amount = total * tax_rate;
console.log("Tax Amount : " +tax_amount );

let final_amount = total  + tax_amount;
console.log("Final Amount : " +final_amount );

