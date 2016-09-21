Template.quoteItem.helpers({
  ownQuote: function() {
    return this.userId === Meteor.userId();
  }
});