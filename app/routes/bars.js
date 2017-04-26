import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'sports-bar',
      title: 'Sports Bar',
      location: 'Brighton',
      going: 0,
      description: 'This is a great bar to catch a game at.',
      image: 'sports-bar.jpg'
    }, {
      id: 'dive-bar',
      title: 'Dive Bar',
      location: 'Allston',
      going: 0,
      description: 'This is a great bar to have a cheap beer.',
      image: 'dive-bar.jpg'
    }, {
      id: 'wine-bar',
      title: 'Wine Bar',
      location: 'Brookline',
      going: 0,
      description: 'This is a great bar to have wine at.',
      image: 'wine-bar.jpg'
    }];
  }
});
