var weight = 0;
var height = 0;

function calculateBMI(w, h) {
    if (h === "" || isNaN(h)) {
        console.log(`Please provide a valid height.`);
    } else if (w === "" || isNaN(w)) {
        console.log(`Please provide a valid weight.`);
    }

    else {
        let bmi = (w / ((h * h)/ 10000)).toFixed(2);

        if (bmi < 18.6) {
            console.log(`Under Weight: ${bmi}`);
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            console.log(`Normal Weight: ${bmi}`);
        } else {
            console.log(`Over Weight: ${bmi}`);
        }
    }
}

calculateBMI(10, 100)