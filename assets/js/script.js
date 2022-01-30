$(currentDay).text(moment().format("dddd, MMMM Do"));

var h = moment().format("h");
var ampm = moment().format("a");
// Created a var that stores a unique number for each day. This is the key on which I can store an array with all of the information SAVED for that day.
// When the page opens, it will compare this unique day number with the keys stored. If it finds one, it will populate the textareas.
var uniqueDay = moment().format("MM")+moment().format("DD")+moment().format("Y");


var saveArray = [];

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

// Selecting all buttons with the class 'btn'
$('.btn').on('click', save);


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