Template.alarmsList.helpers({
  alarms: function () {
    // Alarms.insert({name:"アラーム1", time:"12:00"})
    return Alarms.find({});
  }
});
