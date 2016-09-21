Template.quotePage.helpers({
  comments: function() {
    return Comments.find({quoteId: this._id});
  }
});