// Variables

// Current Date
let currentDayEl = $('#currentDay');
let currentDate;

// Current Time
let currentTime;

// Content to Write/Get to Local Storage (Time and Text)
let calEntryEventTime;
let calEntryEventTxt;

// Button
let saveBtn = $('.saveBtn');

// Vars for Determining Color
let calTimeblock;

// let calendarTimeIndex = 0;
// let calTime;
// let calTimeProtoObject;
// let calTimeArr = [];

// Calls Functions to Render Date and Events to the DOM
function init() {
    currentDateTime();
    renderEvents();
};

// Gets Current Date and Time
function currentDateTime() {
    // var dateNow = moment().format('dddd, MMMM DD, YYYY');
    currentDate = moment().format('dddd, LL');
    currentTime = moment().format('hA');
    currentDayEl.text(currentDate);
};

// Updates Date and Time Once/Second
setInterval(currentDateTime, 1000);

// Renders Events from Local Storage to DOM
// TO DO: Triggers, but doesn't render to screen. Figure out why.
function renderEvents() {
    console.log("Render Events Triggered");
    $("#timeblock-9AM").val(localStorage.getItem('9AM'));
    $("#timeblock-10AM").val(localStorage.getItem('10AM'));
    $("#timeblock-11AM").val(localStorage.getItem('11AM'));
    $("#timeblock-12PM").val(localStorage.getItem('12PM'));
    $("#timeblock-1PM").val(localStorage.getItem('1PM'));
    $("#timeblock-2PM").val(localStorage.getItem('2PM'));
    $("#timeblock-3PM").val(localStorage.getItem('3PM'));
    $("#timeblock-4PM").val(localStorage.getItem('4PM'));
    $("#timeblock-5PM").val(localStorage.getItem('5PM'));
};

// Triggers Click Handler for Save Buttons
saveBtn.on('click', saveButtonClickHandler);

// When Save Button Clicked, Pulls Corresponding Time and Date Values
function saveButtonClickHandler(event) {
    console.log("SubmitButtonClicked");
    event.preventDefault();

    calEntryEventTime = $(this).attr('id').split('-')[1];
    console.log(calEntryEventTime);
    
    calEntryEventTxt = $(this).siblings('input[name^="timeblock"]').val().trim();
    console.log(calEntryEventTxt);

    storeEvents();
};

// Stores Time and Date Values to Local Storage and re-triggers Event Rendering
function storeEvents() {
    localStorage.setItem(calEntryEventTime, calEntryEventTxt);
};

// STILL WORKING

$("input[id*='timeblock']").each(function () {
    calTimeBlock = $(this).attr('id').split('-')[1];
    // Update Classes as Time Progresses
    if (calTimeBlock > currentTime) {
        $(this).addClass('future');
    } else if (calTimeBlock === currentTime) {
        $(this).removeClass('future');
        $(this).addClass('present');
    } else {
        $(this).removeClass('present');
        $(this).addClass('past');
    }
});

// Initializes Page
init();