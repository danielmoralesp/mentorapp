Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('notifications')]
  }
});

QuotesListController = RouteController.extend({
  template: 'quotesList',
  increment: 5, 
  quotesLimit: function() { 
    return parseInt(this.params.quotesLimit) || this.increment; 
  },
  findOptions: function() {
    return {sort: this.sort, limit: this.quotesLimit()};
  },
  subscriptions: function() {
    this.quotesSub = Meteor.subscribe('quotes', this.findOptions());
  },
  quotes: function() {
    return Quotes.find({}, this.findOptions());
  },
  data: function() {
    var hasMore = this.quotes().count() === this.quotesLimit();
    var nextPath = this.route.path({quotesLimit: this.quotesLimit() + this.increment});
    return {
      quotes: this.quotes(),
      ready: this.quotesSub.ready,
      nextPath: hasMore ? this.nextPath() : null
    };
  }
});

NewQuotesController = QuotesListController.extend({
  sort: {submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.newQuotes.path({quotesLimit: this.quotesLimit() + this.increment})
  }
});

BestQuotesController = QuotesListController.extend({
  sort: {votes: -1, submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.bestQuotes.path({quotesLimit: this.quotesLimit() + this.increment})
  }
});

Router.route('/', {
  name: 'home',
  controller: NewQuotesController
});

Router.route('/new/:quotesLimit?', {name: 'newQuotes'});
Router.route('/best/:quotesLimit?', {name: 'bestQuotes'});

Router.route('/quotes/:_id', {
  name: 'quotePage',
  waitOn: function() {
    return [
      Meteor.subscribe('singleQuote', this.params._id),
      Meteor.subscribe('comments', this.params._id)
    ];
  },
  data: function() { return Quotes.findOne(this.params._id); }
});

Router.route('/quotes/:_id/edit', {
  name: 'quoteEdit',
  waitOn: function() {
    return Meteor.subscribe('singleQuote', this.params._id);
  },
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