Template.quoteSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var quote = {
      autor: $(e.target).find('[name=autor]').val(),
      frase: $(e.target).find('[name=frase]').val()
    };
    Meteor.call('quoteInsert', quote, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
      // show this result but route anyway
      if (result.quoteExists)
        alert('This link has already been posted');
      Router.go('quotePage', {_id: result._id});
    });
  }
});