// Sam decides to do cycling 30 minutes everyday for 15 days. Cycling for 30 minutes burns 225 calories on average. 
// Use console.log to tell Sam how much calories he would lose:

// "Great work, Sam! After 30 minutes of cycling every day for a week, you may lose a total of 3375 calories."

// calories lost = calories lost per minute * duration of a workout * days

let caloriesPerHour = 450;
let caloriesLostPerMinute = caloriesPerHour / 60;
let durationOfWorkout = 30;
let days = 15;
let caloriesLost = caloriesLostPerMinute * durationOfWorkout * days;

console.log(`"Great work Sam! After ${durationOfWorkout} minutes of cycling every day for a week, you may lose a total of ${caloriesLost} calories."`)

// You are now working on a finance app that helps users save money. To encourage users to continue saving, 
// you are adding a feature to show how much money they have already saved.

// Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500. Use console.log and variables to output the following in JavaScript:
// "Thank you for your discipline and hardwork, Sam! You are now 25% away from your goal of saving ₱10,000."

savedMoney = 7500;
goal = 10000;

percentageLeft = (1 - (savedMoney / goal)) * 100;

console.log(`"Thank you for your discipline and hardwork, Sam! You are now ${percentageLeft}% away from your goal of saving ₱${goal}."`)
