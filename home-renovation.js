// Home Renovation Cost Estimator

// Area details
const livingRoomArea = 200; // in square feet
const livingRoomCostPerSqFt = 15; // cost per square foot

const kitchenArea = 150; // in square feet
const kitchenCostPerSqFt = 20; // cost per square foot

const bathroomArea = 100; // in square feet
const bathroomCostPerSqFt = 25; // cost per square foot

// Calculations
const livingRoomCost = livingRoomArea * livingRoomCostPerSqFt;
const kitchenCost = kitchenArea * kitchenCostPerSqFt;
const bathroomCost = bathroomArea * bathroomCostPerSqFt;

const totalRenovationCost = livingRoomCost + kitchenCost + bathroomCost;

// Display the results
console.log(`Living Room Cost: $${livingRoomCost}`);
console.log(`Kitchen Cost: $${kitchenCost}`);
console.log(`Bathroom Cost: $${bathroomCost}`);
console.log(`Total Renovation Cost: $${totalRenovationCost}`);