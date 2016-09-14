// Esto es lo que hace autopublish en el lado del servidor, paquete ya eliminado
Meteor.publish('quotes', function() {
  return Quotes.find();
});