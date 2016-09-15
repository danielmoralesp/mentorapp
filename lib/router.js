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

Router.onBeforeAction('dataNotFound', {only: 'quotePage'});