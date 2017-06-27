function AlarmClock(setTime) {
  this.setTime = setTime;
}

AlarmClock.prototype.wakeUp = function() {
  var alarmTime = this.setTime;
  var currentTime = moment().format("HH:mm");
  var alarmSet = "Your alarm is set.";
  var alarm = "YOUR ALARM IS GOING OFF...BUZZZZZZZZ";
  if (alarmTime > currentTime) {
    return alarmSet;
  }
  if (alarmTime <= currentTime) {
    return alarm;
  }

};


AlarmClock.prototype.snooze = function() {
  this.setTime = moment().add(05, 'minutes').format("hh:mm A");
  console.log(this.setTime);
  return this.setTime;
};




exports.alarmModule = AlarmClock;
