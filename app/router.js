import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('bars', function() {
    this.route('show', { path: '/:bar_id' });
  });
});

export default Router;
