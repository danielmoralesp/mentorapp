Quotes = new Mongo.Collection('quotes');

Quotes.allow({
  update: function(userId, quote) { return ownsDocument(userId, quote); },
  remove: function(userId, quote) { return ownsDocument(userId, quote); },
});

Quotes.deny({
  update: function(userId, quote, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'autor', 'frase').length > 0);
  }
});

Meteor.methods({
  quoteInsert: function(quoteAttributes) {
    check(Meteor.userId(), String);
    check(quoteAttributes, {
      autor: String,
      frase: String
    });
    var quoteWithSameLink = Quotes.findOne({frase: quoteAttributes.frase});
    if (quoteWithSameLink) {
      return {
        quoteExists: true,
        _id: quoteWithSameLink._id
      }
    }
    var user = Meteor.user();
    var quote = _.extend(quoteAttributes, {
      userId: user._id,
      creador: user.username,
      submitted: new Date()
    });
    var quotetId = Quotes.insert(quote);
    return {
      _id: quotetId
    };
  }
});