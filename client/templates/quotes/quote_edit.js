Template.quoteEdit.events({
  'submit form': function(e) {
    e.preventDefault();
    var currentQuoteId = this._id;
    var quoteProperties = {
      autor: $(e.target).find('[name=autor]').val(),
      frase: $(e.target).find('[name=frase]').val()
    }
    Quotes.update(currentQuoteId, {$set: quoteProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('quotePage', {_id: currentQuoteId});
      }
    });
  },
  'click .delete': function(e) {
    e.preventDefault();
    if (confirm("Delete this quote?")) {
      var currentQuoteId = this._id;
      Quotes.remove(currentQuoteId);
      Router.go('quotesList');
    }
  }
});