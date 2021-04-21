// Content Areas
let currentDayEl = $('#currentDay');

// Time Display
function displayDate() {
    var rightNow = moment().format('dddd, MMMM DD, YYYY');
    currentDayEl.text(rightNow);
}

setInterval(displayDate, 1000);