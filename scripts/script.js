// Variables

// Current Date
let currentDateEl = $('#currentDate');
let currentDate;

// Current Time
let currentTime;

// Content to Set-To/Get-From Local Storage (Time and Text)
let calEntryEventTime;
let calEntryEventTxt;

// Button
let saveBtn = $('.saveBtn');

// Vars for Determining Color
let calTimeblock;
let timerInterval;

// Calls Functions to Render Date and Events to the DOM & Update Colors
function init() {
    currentMomentDate();
    renderEvents();
    setBGColors();
};

// Gets Current Date and Renders in Jumbotron Header
function currentMomentDate() {
    currentDate = moment().format('dddd, LL');
    currentDateEl.text(currentDate);
};

// Renders Events Pulled from Local Storage to DOM
function renderEvents() {
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
    // Keeps Form from Sending
    event.preventDefault();

    // Sets Value to Time Associated with Clicked Save Button
    calEntryEventTime = $(this).attr('id').split('-')[1];

    // Sets Value to the User's Input Text
    calEntryEventTxt = $(this).siblings('input[name^="timeblock"]').val().trim();

    // Calls Function to Store in Local Storage
    storeEvents();
};

// Stores Time and Text Values to Local Storage where (Time = Key) and (User's Input Text = Value)
function storeEvents() {
    localStorage.setItem(calEntryEventTime, calEntryEventTxt);
};

// Create var to pull IDs from all Timeblock Elements
let timeblockID = $("input[id*='timeblock']");

// Updates Timeblock Classes/Colors as Time Progresses

function setBGColors() {

    // For each timeblock ID, 
    timeblockID.each(function () {
    // Split it to display the time contained at the end of the ID, 
    calTimeBlock = $(this).attr('id').split('-')[1];
    // And convert it to a recognizable Moment.js format.
    calTimeBlock = moment(calTimeBlock).format('hA');
    // Get Moment.js Time & format identically
    currentTime = moment().format('hA');
    
    // Compair Current and ID times and Update Colors as Time Progresses
    if (calTimeBlock > currentTime) {
        $(this).addClass('future');
    } else if (calTimeBlock === currentTime) {
        $(this).removeClass('future');
        $(this).addClass('present');
    } else {
        $(this).removeClass('present');
        $(this).addClass('past');
    }
    })
};

// Updates Date and Time Once/Second
setInterval(currentMomentDate, 1000);

// Updates Colors Once/Second
setInterval(setBGColors, 1000);

// Initializes Page
init();

// TO DO: 
// 1.) Figure out why currentTime won't pass in from a seperate function. Included in setBGColors, for now, though it makes function long.
// 2.) Find out if there is a way to avoid deprecation warning.
// 3.) Figure out why time is formating at top of field (tried text-align-center).
// 4.) Grant more height to timeblock text to avoid cutting off bottom of decenders.
// 5.) Add Media-Queries to update look on mobile/small screens.