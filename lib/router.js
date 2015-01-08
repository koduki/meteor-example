Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'alarmsList'});
Router.route('/edit', {name: 'alarmsEdit'});
