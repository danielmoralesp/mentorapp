/*  BASE DE DATOS INICIAL MANUAL

var quotesData = [
  {
    image: 'about-1.jpg',
    autor: 'Rubel Miah',
    profesion: 'WordPress Engineer',
    frase: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    facebook:'http://www.facebook.com',
    twitter:'http://www.twitter.com',
    google:'http://www.google.com',
    linkedin:'http://www.linkedin.com',
    instagram:'http://www.instagram.com'
  },
  {
    image: 'about-1.jpg',
    autor: 'Rubel Miah',
    profesion: 'WordPress Engineer',
    frase: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    facebook:'http://www.facebook.com',
    twitter:'http://www.twitter.com',
    google:'http://www.google.com',
    linkedin:'http://www.linkedin.com',
    instagram:'http://www.instagram.com'
  },
  {
    image: 'about-1.jpg',
    autor: 'Rubel Miah',
    profesion: 'WordPress Engineer',
    frase: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    facebook:'http://www.facebook.com',
    twitter:'http://www.twitter.com',
    google:'http://www.google.com',
    linkedin:'http://www.linkedin.com',
    instagram:'http://www.instagram.com'
  }
];
Template.quotesList.helpers({
  quotes: quotesData
});

*/

// Este helper sigue funcionando asi se quite el autopublish
Template.quotesList.helpers({
  quotes: function() {
    return Quotes.find({}, {sort: {submitted: -1}});
  }
});