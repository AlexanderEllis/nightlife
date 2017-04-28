import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr(),
  rating: DS.attr(),
  location: DS.attr(),
  going: DS.attr(),
  description: DS.attr(),
  image: DS.attr()
});
