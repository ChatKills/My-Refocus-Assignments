// Task 1 : Pulse oximeter reading (part 1)
// You are asked to develop a JavaScript app compatible with smartwatches. You
// use the sensor data of its pulse oximeter to tell a user that their oxygen level
// is normal or alarming. Write a function that alerts a user of their oxygen saturation.

// Oxygen Saturation,   Observation
// (SpO2)%
// > 95%                Normal reading.
// 95%                  Acceptable to continue home monitoring.
// ≥ 92% and < 95%      Seek advice from health professionals.
// < 92%                Seek urgent medical advice.


function acceptableOxygenLevel(oxygenSaturation) {
    if (oxygenSaturation == 95) {
        console.log ("The oxygen level is acceptable to continue home monitoring.")
    }
    else if (oxygenSaturation > 95) {
        console.log ("The oxygen level is normal.")
    }
    else if (( oxygenSaturation >= 92 ) && ( oxygenSaturation < 95 )) {
        console.log ("Seek advice from health professionals.")
    }
    else if (oxygenSaturation < 92) {
        console.log ("Seek urgent medical advice.")
    }
    else {
        console.log ("The variable is not a number.")
    }
}
acceptableOxygenLevel(95);

// Task 2 :  Pulse oximeter reading (part 2)
// Continue with the last task, and provide more observations based on the pulse rate.

// Pulse Rate,          Observation
// beats per minute
// 40–100               Normal reading.
// 101–109              Acceptable to continue home monitoring.
// 110–130              Seek advice from health professionals.
// ≥ 131                Seek urgent medical advice.

let pulseRate;
function countPulseRate(pulse) 
{
    
    for ( let i = 1 ; i <= 131 ; i++)  {     
            if ( pulse >= 40 && pulse <= 100 ) {
                pulseRate = `Your pulse rate has a normal reading.`;
        }
            else if ( pulse >= 101 && pulse <= 109 ) {
                pulseRate = `Your pulse rate is acceptable to continue home monitoring.`
        }
            else if ( pulse >= 101 && pulse <= 109 ) {
                pulseRate = `Your pulse rate is acceptable to continue home monitoring.`
        }
            else if ( pulse >= 110 && pulse <= 130 ) {
                pulseRate = `Seek advice from health professionals.`
        }
            else if ( pulse >= 131 ) {
                pulseRate = `Seek urgent medical advice.`
        }
        
    }
}
countPulseRate(131);
console.log(pulseRate);
