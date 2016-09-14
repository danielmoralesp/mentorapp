Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('quotes'); }
});

Router.route('/', {name: 'quotesList'});