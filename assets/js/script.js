$(currentDay).text(moment().format("dddd, MMMM Do"));

var h = moment().format("h");
var ampm = moment().format("a");

var hNum = parseInt(h);
if (ampm = 'pm') {
  hNum += 12;
}

// Using times on the 24hr military time for convenience
var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// This jQuery iterator looks at each time from 9am to 5pm (17) and compares them to the actual time to determine the color of each row.
$.each(timeArr, function (i) {
  var rowId = "#" + timeArr[i];
  if (timeArr[i] < h) {
    $(rowId).addClass('past');
  } else if (timeArr[i] === h) {
    $(rowId).addClass('present');
  } else if (timeArr[i] > h) {
    $(rowId).addClass('future');
  }
});
//     if (timeArr[i] == h) {

//         $(rowId).addClass('present');
//     } else if (timeArr[] ){
//         $(rowId).addClass('future');
//     }
// })

// if (ap == 'am') {
//     console.log('HEY!');
// }

// $(rowId).addClass('future');
