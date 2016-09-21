// Esto es lo que hace autopublish en el lado del servidor, paquete ya eliminado
Meteor.publish('quotes', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Quotes.find({}, options);
});

Meteor.publish('singleQuote', function(id) {
  check(id, String);
  return Quotes.find(id);
});

Meteor.publish('comments', function(quoteId) {
  check(quoteId, String);
  return Comments.find({quoteId: quoteId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});