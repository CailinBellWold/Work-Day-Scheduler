// Content Areas
let currentDayEl = $('#currentDay');
let rightNow;

// Time Display
function displayDate() {
    // var rightNow = moment().format('dddd, MMMM DD, YYYY');
    var rightNow = moment().format('dddd, LL');
    currentDayEl.text(rightNow);
}

setInterval(displayDate, 1000);

let calendarTimeIndex = 0;
let calTime;
let calTimeblock;

let businessHours = [
    {
    time: 'hour9AM',
    timeblock: 'timeblock9AM',
    },
    {
    time: 'hour10AM',
    timeblock: 'timeblock10AM',
    },
    {
    time: 'hour11AM',
    timeblock: 'timeblock11AM',
    },
    {
    time: 'hour12PM',
    timeblock: 'timeblock12PM',
    },
    {
    time: 'hour1PM',
    timeblock: 'timeblock1PM',
    },
    {
    time: 'hour2PM',
    timeblock: 'timeblock2PM',
    },
    {
    time: 'hour3PM',
    timeblock: 'timeblock3PM',
    },
    {
    time: 'hour4PM',
    timeblock: 'timeblock4PM',
    },
    {
    time: 'hour5PM',
    timeblock: 'timeblock5PM',
    }
];

for (let i = 0; i < businessHours.length; i++) {
    calTime = businessHours[i].time;
    calTimeblock = businessHours[i].timeblock;
    console.log(calTime);
    console.log(calTimeblock);
};

//GOAL: Go out and pull the inner HTML of each Time ID from the array, then convert it to Moment.js. Use is before/is same/is after to figure out where it is in relation to right now, then color corresponding timeblock accordingly using style class.

// for (let i = 0; i < calTime.length; i++) {
//     let calTimeIndex = calTime[i];
//     console.log(calTimeIndex);
// };

// function timeFrame(){
//     if (moment(rightNow).isBefore('2010-10-21')) {
//         DO X 
//     } else if (moment(rightNow).isSame('2010-10-20')) {
//         DO Y
//     } else if (moment(rightnow).isAfter('2010-10-19')) {
//         DO Z
//     } else {
//         console.log(timeFrame);
//     }

timeblockColor();
function timeblockColor() {
    // get the input date from #input div element
    let calTimeInnerHTML = document.getElementById(calTime[1]).innerHTML;
    console.log(calTimeInnerHTML);

    // use moment() with input value and a string format pattern as arguments
    let convertTime = moment(calTime, 'HH:MM a');
    console.log(convertTime);
};

    // var beforeDuringAfter = document.getElementById('timeblock9AM');
    // eDisplayMoment.innerHTML = Date.format('YYYY-M-D');


// let h1 = moment(rightNow);
// console.log(h1.format('LT'));
