var AlarmClock = require('./../js/alarm.js').alarmModule;
var Sounds = require('./../js/sound.js').soundModule;
var SoundsPause = require('./../js/sound.js').soundPauseModule;

function date_time() {
  $("#time").html(moment().format('H:mm:ss'));
}
setInterval(date_time, 1000);

$(document).ready(function(){
  $("#clock").submit(function(event){
    event.preventDefault();
    var setTime = $('#alarmTime').val();
    var newAlarm = new AlarmClock(setTime);
    var currentTime = moment().format("HH:mm");
    var alarm = newAlarm.wakeUp();
    $("#alarm-time-show").show();
    $(".alarm-set-time").text(setTime);
    $("#snooze-button").show();
    $("#alarm-success").text(alarm);
    if (setTime <= currentTime) {
      $("#alarm-image").show();
      Sounds();
    }
  });
  $("#snooze-button").click(function(){
    var setTime = $('#alarmTime').val();
    var newAlarm = new AlarmClock(setTime);
    var snoozeAlarm = newAlarm.snooze();
    $("#snooze-time").show();
    $("#alarm-image").hide();
    $("#alarm-success").hide();
    $("#snooze-button").hide();
    $("#alarm-time-show").hide();
    $(".snooze-time").text(snoozeAlarm);
    SoundsPause();
  });
});
