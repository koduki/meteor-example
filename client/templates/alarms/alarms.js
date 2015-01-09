Template.alarmsList.helpers({
  alarms: function () {
    return Alarms.find({});
  }
});

Template.alarmsList.events({
  'click a': function (e) {
    e.preventDefault();
    Alarms.remove(this._id);
    Router.go('alarmsList');
  }
});

Template.alarmsEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var name = $(e.target).find('[name=name]').val() || 'アラーム1';
    var time = $(e.target).find('[name=time]').val();

    var alarm = {
      name: name,
      time: time
    };

    alarm._id = Alarms.insert(alarm);
    Router.go('alarmsList', alarm);
  }
});
