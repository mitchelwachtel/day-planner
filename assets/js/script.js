$(currentDay).text(moment().format("dddd, MMMM Do"));

var txt9El = $('#text9');
var txt10El = $('#text10');
var txt11El = $('#text11');
var txt12El = $('#text12');
var txt13El = $('#text13');
var txt14El = $('#text14');
var txt15El = $('#text15');
var txt16El = $('#text16');
var txt17El = $('#text17');

var btn9El = $('#btn9');
var btn10El = $('#btn10');
var btn11El = $('#btn11');
var btn12El = $('#btn12');
var btn13El = $('#btn13');
var btn14El = $('#btn14');
var btn15El = $('#btn15');
var btn16El = $('#btn16');
var btn17El = $('#btn17');


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
  if (timeArr[i] < hNum) {
    $(rowId).addClass('past');
  } else if (timeArr[i] === hNum) {
    $(rowId).addClass('present');
  } else if (timeArr[i] > hNum) {
    $(rowId).addClass('future');
  }
});

$('.btn').on('click', save);

function save(event) {
    console.log(event.target.attributes.data.value);
    var x = event.target.attributes.data.value;
    console.log(x);
    var k = $('#text'+ x);
    console.log(k);
    console.log(k.val());
}