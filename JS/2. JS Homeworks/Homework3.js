// convertToKelvin(tempCelsius) that converts Celsius to Kelvin
// convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin

function celsiusConvertToKelvin(tempCelsius) {
    let tempKelvin = (tempCelsius + 273.15)
    return tempKelvin;
}

function fahrenheitConvertToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit - 32) * 5/9 + 273.15
    return tempKelvin;
}

console.log(celsiusConvertToKelvin(35));        // 308.15 K 
console.log(fahrenheitConvertToKelvin(35));     // 274.817 K

// You are asked to design an app that enables you to leave a tip. The tip should be 10% of a meal cost. 
// Write a code that shows the total tip to be paid based on the food price.

function computeTip(totalBill) {
    let mealTip = (totalBill * 0.10 );
    return mealTip;
}
console.log (computeTip(1000))
