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
/* SE HACE DESDE LA RUTA
Template.quotesList.helpers({
  quotes: function() {
    return Quotes.find({}, {sort: {submitted: -1}});
  }
});
*/

//Animaciones
Template.quotesList.onRendered(function () {
  this.find('.wrapper')._uihooks = {
    insertElement: function (node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    moveElement: function (node, next) {
      var $node = $(node), $next = $(next);
      var oldTop = $node.offset().top;
      var height = $node.outerHeight(true);
      // find all the elements between next and node
      var $inBetween = $next.nextUntil(node);
      if ($inBetween.length === 0)
        $inBetween = $node.nextUntil(next);
      // now put node in place
      $node.insertBefore(next);
      // measure new top
      var newTop = $node.offset().top;
      // move node *back* to where it was before
      $node
        .removeClass('animate')
        .css('top', oldTop - newTop);
      // push every other element down (or up) to put them back
      $inBetween
        .removeClass('animate')
        .css('top', oldTop < newTop ? height : -1 * height)
      // force a redraw
      $node.offset();
      // reset everything to 0, animated
      $node.addClass('animate').css('top', 0);
      $inBetween.addClass('animate').css('top', 0);
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  }
});

