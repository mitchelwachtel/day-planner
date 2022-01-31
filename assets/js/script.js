$(currentDay).text(moment().format("dddd, MMMM Do"));

var h = moment().format("h");
var ampm = moment().format("a");
// Created a var that stores a unique number for each day. This is the key on which I can store an array with all of the information SAVED for that day.
// When the page opens, it will compare this unique day number with the keys stored. If it finds one, it will populate the textareas.
var uniqueDay = moment().format("MM")+moment().format("DD")+moment().format("Y");

var saveArray = [];

// if converted to an integer, then we can add to it and compare with inequalities
var hNum = parseInt(h);
if (ampm = 'pm' && h != 12) {
  hNum += 12;
}

// Using times on the 24hr military time for convenience
var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// This jQuery iterator looks at each time from 9am to 5pm (17) and compares them to the actual time to determine the color of each row.
$.each(timeArr, function (i) {
  var rowId = "#" + timeArr[i];
  if (timeArr[i] < hNum) {
    $(rowId).addClass('past');
  } else if (timeArr[i] === hNum) {
    $(rowId).addClass('present');
  } else if (timeArr[i] > hNum) {
    $(rowId).addClass('future');
  }
});

// Selecting all buttons with the class 'btn' AND since there is an image that can be clicked inside the button, it gets an event listener as well.
$('.btn').on('click', save);
$('img').on('click', save);

// Upon clicking save, each button has a data attribute that is being collected and stored for x, this allows us to know which button controls which textarea
// Once we know what textarea we are pulling from we can grab that text and store it along with the time in an object
// Push the object to an array, and store the array as a string in local storage
function save(event) {
    var x = event.target.attributes.data.value;
    var k = $('#text'+ x);
    var object = {
        time: x,
        text: k.val(),
    }
    
    saveArray.push(object);
    
    localStorage.setItem(uniqueDay, JSON.stringify(saveArray));
}

// useStorage is called every time index.html is loaded. It uses the uniqueDay value to see if there is anything stored locally for TODAY!
// If anything is stored to TODAY, then useStorage gets the string from local and converts it to an Array
// Finally, useStorage iterates through this array and the most recently stored text from localStorage populates each textarea
// Older saves on the same day are essentially overwritten my more recent ones as useStorage iterates through the array, but the older saves do EXIST in the array.
function useStorage () {

    if (localStorage.getItem(uniqueDay) !== null) {
        var y = localStorage.getItem(uniqueDay);
        saveArray = JSON.parse(y);

        for (i=0; i<saveArray.length; i++) {
            var x = saveArray[i].time;
            var id = $('#text'+ x);
            id.text(saveArray[i].text); 
        }
    }
}