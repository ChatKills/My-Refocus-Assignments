/* 
    todo : Create a program that will convert the duration of each delivery from seconds to readable format.
    todo : Create a function that will convert seconds to hours and return the value of an object
    todo : Create a function that will convert seconds to minutes
    todo : Create a function that will print the converted duration
    @function : toHours
    @function : toMinutes
    @param : seconds
*/


/* Convert Seconds to Hours */
function toHours (seconds) {
    var hours = Math.floor(seconds / 3600);
    var remainder = Math.floor(seconds % 3600);

    let obj = {
        hours: hours,
        remainder: remainder
    }
    return obj;

}

/* Convert Seconds to Minutes */
function toMinutes (seconds) {
    minutes = Math.floor(seconds % 3600 / 60);
    remainder = Math.floor(seconds % 60);

    obj = {
        minutes: minutes,
        remainder: remainder
    }
    return obj;
}
// /* Print Converted Duration */
function humanDuration (duration) {
    hoursObject = toHours(duration);
    minutesObject = toMinutes(duration);
    seconds =  minutesObject.remainder;

    return `The formatted duration of ${duration} is ${hoursObject.hours} ${hoursObject.hours > 1? "Hours": "Hour"}, ${minutesObject.minutes} ${minutesObject.minutes > 1? "Minutes": "Minute"} and ${seconds} ${seconds > 1? "Seconds": "Second"}.`;
}

console.log (humanDuration(4800));
console.log (humanDuration(5212));
console.log (humanDuration(300));