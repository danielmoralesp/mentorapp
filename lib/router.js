Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('quotes'); }
});

Router.route('/', {name: 'quotesList'});

Router.route('/quotes/:_id', {
  name: 'quotePage',
  data: function() { return Quotes.findOne(this.params._id); }
});

Router.route('/quotes/:_id/edit', {
  name: 'quoteEdit',
  data: function() { return Quotes.findOne(this.params._id); }
});

Router.route('/submit', {name: 'quoteSubmit'});
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'quotePage'});
Router.onBeforeAction(requireLogin, {only: 'quoteSubmit'});