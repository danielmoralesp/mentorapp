Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return ownsDocument(userId, doc) &&
      fieldNames.length === 1 && fieldNames[0] === 'read';
  }
});

createCommentNotification = function(comment) {
  var quote = Quotes.findOne(comment.quoteId);
  if (comment.userId !== quote.userId) {
    Notifications.insert({
      userId: quote.userId,
      quoteId: quote._id,
      commentId: comment._id,
      commenterName: comment.creador,
      read: false
    });
  }
};