Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      quoteId: String,
      body: String
    });
    var user = Meteor.user();
    var quote = Quotes.findOne(commentAttributes.quoteId);
    if (!quote)
      throw new Meteor.Error('invalid-comment', 'You must comment on a quote');
    comment = _.extend(commentAttributes, {
      userId: user._id,
      creador: user.username,
      submitted: new Date()
    });
    // update the quote with the number of comments
	Quotes.update(comment.quoteId, {$inc: {commentsCount: 1}});
    // create the comment, save the id
    comment._id = Comments.insert(comment);
    // now create a notification, informing the user that there's been a comment
    createCommentNotification(comment);
    return comment._id;
  }
});