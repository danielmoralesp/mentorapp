Template.quoteSubmit.onCreated(function() {
  Session.set('quoteSubmitErrors', {});
});

Template.quoteSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('quoteSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('quoteSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.quoteSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var quote = {
      autor: $(e.target).find('[name=autor]').val(),
      frase: $(e.target).find('[name=frase]').val()
    };
    var errors = validateQuote(quote);
    if (errors.autor || errors.frase)
      return Session.set('quoteSubmitErrors', errors);
    Meteor.call('quoteInsert', quote, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      // show this result but route anyway
      if (result.quoteExists)
        throwError('Esta frase ya ha sido posteada');
      Router.go('quotePage', {_id: result._id});
    });
  }
});