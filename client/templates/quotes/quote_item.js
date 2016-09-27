Template.quoteItem.helpers({
  ownQuote: function() {
    return this.userId === Meteor.userId();
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
    	return 'upvotable';
    } else {
    	return 'disabled';
    }
  },
  profesion: function() {
    var autor = this.autor;
    if (autor === 'Aaron Patzer'){
      return 'Cofundador Mint';
    } else if (autor === 'Adam Dangelo'){
      return 'Cofundador Quora';
    } else if (autor === 'Ben Horowitz'){
      return 'Cofundador Andressen-Horowitz (a16z)';
    } else if (autor === 'Dave Mclure'){
      return 'Cofundador 500Startups';
    } else if (autor === 'David Karp'){
      return 'Cofundador Tumblr';
    } else if (autor === 'David Sacks'){
      return 'Cofundador Yammer';
    } else if (autor === 'Dennis Crowley'){
      return 'Cofundador Foursquare';
    } else if (autor === 'Drew Houston'){
      return 'Cofundador Dropbox';
    } else if (autor === 'Elon Musk'){
      return 'Cofundador Tesla, SpaceX, SolarCity';
    } else if (autor === 'Evan Doll'){
      return 'Cofundador Flipboard';
    } else if (autor === 'Fred Wilson'){
      return 'Cofundador Union Square Ventures';
    } else if (autor === 'Jack Ma'){
      return 'Cofundador Alibaba';
    } else if (autor === 'Jan Koum'){
      return 'Cofundador Whatsapp';
    } else if (autor === 'Jason Fried'){
      return 'Cofundador Basecamp';
    } else if (autor === 'Jason Goldberg'){
      return 'Cofundador FAB';
    } else if (autor === 'Jeff Atwood'){
      return 'Cofundador SatckExchange';
    } else if (autor === 'Jeff Bezos'){
      return 'Fundador Amazon';
    } else if (autor === 'Jim Barksdale'){
      return 'CEO Netscape';
    } else if (autor === 'Joel Spolsky'){
      return 'Cofundador StackExchange';
    } else if (autor === 'John Donahoe'){
      return 'CEO Ebay';
    } else if (autor === 'Jonathan Ive'){
      return 'Vice-Presidente Diseño Apple';
    } else if (autor === 'Larry Ellison'){
      return 'Fundador Oracle';
    } else if (autor === 'Larry Page'){
      return 'Cofundador Google';
    } else if (autor === 'Marc Arment'){
      return 'Cofundador Instapaper';
    } else if (autor === 'Marissa Mayer'){
      return 'CEO Yahoo';
    } else if (autor === 'Mark Beinoff'){
      return 'Fundador Salesforce';
    } else if (autor === 'Mark Pincus'){
      return 'Fundador Zinga';
    } else if (autor === 'Mark Suster'){
      return 'Partner Upfront Ventures';
    } else if (autor === 'Matt Mullenweg'){
      return 'Cofundador Wordpress';
    } else if (autor === 'Michael Arrington'){
      return 'Fundador Techcrunch';
    } else if (autor === 'Michael Dell'){
      return 'Fundador Dell Coomputers';
    } else if (autor === 'Naval Ravikant'){
      return 'Cofundador AngelList';
    } else if (autor === 'Paul Graham'){
      return 'Cofundador YCombinator';
    } else if (autor === 'Pony Ma'){
      return 'Cofundador Tencent';
    } else if (autor === 'Reid Hoffman'){
      return 'Fundador Linkedin';
    } else if (autor === 'Sachin Agarwal'){
      return 'Cofundador Posterous';
    } else if (autor === 'Sam Altman'){
      return 'CEO YCombinator';
    } else if (autor === 'Satya Nadela'){
      return 'CEO Microsoft';
    } else if (autor === 'Scott Belsky'){
      return 'Cofundador Behance';
    } else if (autor === 'Scott Heiferman'){
      return 'Cofundador Meetup';
    } else if (autor === 'Sergey Brin'){
      return 'Cofundador Google';
    } else if (autor === 'Steve Jobs'){
      return 'Cofundador Apple';
    } else if (autor === 'Tim Oreilly'){
      return 'Cofundador O`Reilly Media';
    } else if (autor === 'Tim Westergren'){
      return 'Cofundador Pandora';
    } else if (autor === 'Tom Preston'){
      return 'Cofundador GitHub';
    } else if (autor === 'Tony Hsieh'){
      return 'Cofundador Zappos';
    } else if (autor === 'Travis Kalanick'){
      return 'Cofundador Uber';
    } else if (autor === 'Jack Dorsey'){
      return 'Co-Fundador de Twitter';
    }
  }
});

Template.quoteItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});

