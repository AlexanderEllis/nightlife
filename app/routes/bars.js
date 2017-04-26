import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'sports-bar',
      title: 'Sports Bar',
      location: 'Brighton',
      going: 0,
      description: 'This is a great bar to catch a game at.',
      image: 'http://www.hermarys.com/wp-content/uploads/sports-bar-600x360.png'
    }, {
      id: 'dive-bar',
      title: 'Dive Bar',
      location: 'Allston',
      going: 0,
      description: 'This is a great bar to have a cheap beer.',
      image: 'https://divebardiscourse.files.wordpress.com/2015/09/dive-counter.jpg'
  }, {
    id: 'wine-bar',
      title: 'Wine Bar',
      location: 'Brookline',
      going: 0,
      description: 'This is a great bar to have wine at.',
      image: 'https://vinepair.com/wp-content/uploads/2015/10/Krog-Bar.jpg'
    }];
  }
});
