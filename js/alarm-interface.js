var AlarmClock = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  $('#time').text(moment());
});

$(document).ready(function(){
  $("#clock").submit(function(event){
    event.preventDefault();
    var setTime = $('#alarmTime').val();
    var newAlarm = new AlarmClock(setTime);
    var currentTime = moment().format("HH:mm");
    var alarm = newAlarm.wakeUp();

    $(".alarm-set-time").text(setTime);
    $("#alarm-success").text(alarm);
  });
});
