Subscribe = new Mongo.Collection('subscribe');

Meteor.methods({
  subscribeInsert: function(subscriptor) {
    check(subscriptor, {
      email: String
    });

    return Subscribe.insert(subscriptor);
  }
});

