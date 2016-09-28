Subscribe = new Mongo.Collection('subscribe');



Meteor.methods({
  subscribeInsert: function(rawFormData){


    Shower.subscribeForm.validate(rawFormData, function(errors, formFieldsObject){
        if(!errors){
            //Do what we need to do here;
            return Subscribe.insert(formFieldsObject);
        }
    });
  }
});
