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

validateQuote = function (quote) {
  var errors = {};
    if (!quote.autor)
      errors.autor = "Please fill in a headline";
    if (!quote.frase)
      errors.frase =  "Please fill in a Quote";
  return errors;
}

Quotes.deny({
  update: function(userId, quote, fieldNames, modifier) {
    var errors = validateQuote(modifier.$set);
    return errors.autor || errors.frase;
  }
});

Meteor.methods({
  quoteInsert: function(quoteAttributes) {
    check(Meteor.userId(), String);
    check(quoteAttributes, {
      autor: String,
      frase: String
    });
    var errors = validateQuote(quoteAttributes);
    if (errors.autor || errors.frase)
      throw new Meteor.Error('invalid-quote', "You must set a autor and frase for your post");
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
      submitted: new Date(),
      commentsCount: 0
    });
    var quotetId = Quotes.insert(quote);
    return {
      _id: quotetId
    };
  }
});