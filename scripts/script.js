// Content Areas

// Current Date
let currentDayEl = $('#currentDay');
let dateNow;

//Current Time
let timeNow;

// Content to Write/Get to Local Storage (Time and Text)
let calEntryEventTime;
let calEntryEventTxt;

// Button
let saveBtn = $('.saveBtn');

let calendarTimeIndex = 0;
let calTime;
let calTimeblock;

let calTimeProtoObject;
let calTimeArr = [];

// Date Display
function currentDateTime() {
    // var dateNow = moment().format('dddd, MMMM DD, YYYY');
    dateNow = moment().format('dddd, LL');
    timeNow = moment().format('LTS');
    currentDayEl.text(dateNow);
};

setInterval(currentDateTime, 1000);

let businessHours = [
    {
    time: '9-AM',
    timeblock: 'timeblock-9AM',
    },
    {
    time: '10-AM',
    timeblock: 'timeblock-10AM',
    },
    {
    time: '11-AM',
    timeblock: 'timeblock-11AM',
    },
    {
    time: '12-PM',
    timeblock: 'timeblock-12PM',
    },
    {
    time: '1-PM',
    timeblock: 'timeblock-1PM',
    },
    {
    time: '2-PM',
    timeblock: 'timeblock-2PM',
    },
    {
    time: '3-PM',
    timeblock: 'timeblock-3PM',
    },
    {
    time: '4-PM',
    timeblock: 'timeblock-4PM',
    },
    {
    time: '5-PM',
    timeblock: 'timeblock-5PM',
    }
];

for (let i = 0; i < businessHours.length; i++) {
    calTime = businessHours[i].time;
    console.log(calTime);

    calTimeProtoObject = {calTime};
    console.log(calTimeProtoObject); 
    //TO DO: How do I put these into an array?
    // Look in to using .map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

    calTimeblock = businessHours[i].timeblock;
    console.log(calTimeblock);
};

//GOAL: Go out and pull the inner HTML of each Time ID from the array, then convert it to Moment.js. Use is before/is same/is after to figure out where it is in relation to right now, then color corresponding timeblock accordingly using style class.

// for (let i = 0; i < calTime.length; i++) {
//     // let calTimeInnerHTML = document.getElementById(calTime)[i].innerHTML;
//     // console.log(calTimeInnerHTML);

//     let calTimeIndex = document.getElementById(calTime).innerHTML;
//     console.log(calTimeIndex);
// };


// timeblockColor();
// function timeblockColor() {
//     // get the input date from #input div element
//     let calTimeInnerHTML = document.getElementById(calTime[i]).innerHTML;
//     console.log(calTimeInnerHTML);

//     // use moment() with input value and a string format pattern as arguments
//     let convertTime = moment(calTime, 'HH a');
//     console.log(convertTime);
// };

// function timeFrame(){
//     if (moment(rightNow).isBefore('2010-10-21')) {
//         DO X 
//     } else if (moment(rightNow).isSame('2010-10-20')) {
//         DO Y
//     } else if (moment(rightnow).isAfter('2010-10-19')) {
//         DO Z
//     } else {
//         console.log("Error:" timeFrame);
//     }

function saveButtonClickHandler(event) {
    console.log("SubmitButtonClicked"); //Works
    event.preventDefault();

    calEntryEventTime = $(this).attr('id').split('-')[1];
    console.log(calEntryEventTime); //Works
    
    calEntryEventTxt = $(this).siblings('input[name^="timeblock"]').val().trim();
    console.log(calEntryEventTxt); //Works
};

saveBtn.on('click', saveButtonClickHandler);