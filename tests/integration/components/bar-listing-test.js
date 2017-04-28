import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let bar = Ember.Object.create({
    id: 'test-bar',
    name: 'test-name',
    location: 'test-city',
    going: 0,
    rating: 1,
    description: 'test-description',
    image: 'fake.png'
});

moduleForComponent('bar-listing', 'Integration | Component | bar listing', {
  integration: true
});

test('should display rental details', function(assert) {
  this.set('barObj', bar);
  this.render(hbs`{{bar-listing bar=barObj}}`);

  assert.equal(this.$('.listing h3').text(), 'test-name', 'Name: test-name');
  assert.equal(this.$('.listing .location').text().trim(), 'Location: test-city');
});

test('should toggle wide class on click', function(assert) {
  this.set('barObj', bar);
  this.render(hbs`{{bar-listing bar=barObj}}`);

  assert.equal(this.$('.image.wide').length, 0, 'initially rendered without wide class');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 1, 'Wide once clicked once');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 0, 'Back to normal width without wide class');
});