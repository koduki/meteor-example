Template.alarmsList.helpers({
  alarms: function () {
    // Alarms.insert({name:"アラーム1", time:"12:00"})
    return Alarms.find({});
  }
});

Template.alarmsEdit.events({
  'submit form': function(e) {
    e.preventDefault();//formのsubmit処理無効化

    var alarm = {
      name: $(e.target).find('[name=name]').val(),
      time: $(e.target).find('[name=time]').val()
    };

    alarm._id = Alarms.insert(alarm);
    Router.go('alarmsList', alarm);
  }
});
