let mileDistance = 300;
let milePerGallon = 25;
let pricePerGallon = 3.75;

//Fuel Needed: Calculate the number of gallons required for the trip.
let gallonsNeeded = mileDistance / milePerGallon;

//Trip Cost: Multiply the fuel needed by the cost per gallon.
let tripCost = gallonsNeeded * pricePerGallon;

// Round the results to 2 decimal places for better readability
gallonsNeeded = Math.round(gallonsNeeded * 100) / 100;
tripCost = Math.round(tripCost * 100) / 100;

// Display the results
console.log(`Gallons of fuel needed: ${gallonsNeeded}`);
console.log(`Total trip cost: $${tripCost}`);