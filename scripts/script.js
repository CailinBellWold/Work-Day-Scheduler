// Current Date / Time
let currentDateEl = $('#currentDate');
let currentDate;
let currentTime;

// Set-To/Get-From Local Storage (Time and Text)
let calEntryEventTime;
let calEntryEventTxt;
let timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

// Button
let saveBtn = $('.saveBtn');

// Determine Color
let calTimeblock;
let timerInterval;
let timeblockID = $("textarea[id*='timeblock']");

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
    for (let i = 0; i < timeArr.length; i++) { 
        $('[id^=timeblock-]').each(function (i, v) {
            $(v).val(localStorage.getItem(timeArr[i]));
        })
    }
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
    calEntryEventTxt = $(this).siblings('textarea[name^="timeblock"]').val().trim();
    // Calls Function to Store in Local Storage
    storeEvents();
};

// Stores Time and Text Values to Local Storage where (Time = Key) and (User's Input Text = Value)
function storeEvents() {
    localStorage.setItem(calEntryEventTime, calEntryEventTxt);
};

// Updates Timeblock Classes/Colors as Time Progresses
function setBGColors() {
    // For each timeblock ID, 
    timeblockID.each(function () {
    // Split it to display the time contained at the end of the ID, 
    calTimeBlock = $(this).attr('id').split('-')[1];
    // And convert it to a Moment.js format, then an integer
    calTimeBlock = parseInt(moment(calTimeBlock, 'H').format('H'));
    // Get Moment.js Time & format identically
    currentTime = parseInt(moment().format('H'));
    
    if (currentTime < calTimeBlock) {
        $(this).removeClass('past present');
        $(this).addClass('future');
    } else if (currentTime === calTimeBlock) {
        $(this).removeClass('past future');
        $(this).addClass('present');
    } else if (currentTime > calTimeBlock) {
        $(this).removeClass('present future');
        $(this).addClass('past');
    } else {
        console.log("Time Calculation Error");
    }
    })
};

// Updates Date/Time and Colors Once Per Minute On The Minute
function setIntervalOnMinute() {
    var currentDateSeconds = new Date().getSeconds();
    if (currentDateSeconds == 0) {
        setInterval(currentMomentDate, 60000);
        setInterval(setBGColors, 60000);
    } else {
        setTimeout(function () {
            setIntervalOnMinute();
        }, (60 - currentDateSeconds) * 1000);
    }
    currentMomentDate();
    setBGColors();
};

setIntervalOnMinute();

// Initializes Page
init();

// TO DO: 
// 2.) Add Media-Queries to update look on mobile/small screens.