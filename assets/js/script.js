$(currentDay).text(moment().format('dddd, MMMM Do'));

var h = moment().format('h');
var ap = moment().format('a');

var timeArr = [9, 10, 11, 12, 1, 2, 3, 4, 5];

$.each(timeArr, function(i) {
    var rowId = '#' + timeArr[i];
    if (ap == 'am') {
        if (h == '9' || h == '10' || h == '11' || h == '12') {
          if (h == '12') {
              
          }
    }
}
    if (timeArr[i] == h) {
        
        
        $(rowId).addClass('present');
    } else if (timeArr[] ){
        $(rowId).addClass('future');
    }
})

// if (ap == 'am') {
//     console.log('HEY!');
// }

// $(rowId).addClass('future');

