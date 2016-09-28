Template.subscribeItem.onCreated(function() {
  Session.set('subscribeItemErrors', {});
});

Template.subscribeItem.helpers({
  errorMessage: function(field) {
    return Session.get('subscribeItemErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('subscribeItemErrors')[field] ? 'has-error' : '';
  }
});

Template.subscribeItem.events({
  'submit form': function(e) {
    e.preventDefault();
    var $email = $(e.target).find('[name=email]');
    var subscriptor = {
      email: $email.val()
    };
    var errors = {};
    if (! subscriptor.email) {
      errors.email = "Porfavor escriba un email";
      return Session.set('subscribeItemErrors', errors);
    }
    Meteor.call('subscribeInsert',subscriptor, function(error, subscriptors){
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      Router.go('home');
      document.forms['subscribe'].reset();
    });
  }
});