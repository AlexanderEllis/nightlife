import { test } from 'qunit';
import moduleForAcceptance from 'nightlife-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list bars');

// Acceptance tests interact with the app like an actual person, but are automated

test('should show bars for user\'s location as the home page', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/bars', 'should redirect automatically');
  });
});

test('should link to information about the app', function(assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should list bars', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.listing').length, 3, 'should see 3 bars');
  });
});

test('should filter the list of bars by name', function(assert) {
  visit('/');
  fillIn('.list-filter input', 'Dive');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function() {
    assert.equal(find('.listing').length, 1, 'Should only show one listing');
    assert.equal(find('.listing h3:contains("Dive")').length, 1, 'Should only show the result we searched for');
  });
});

test('should search bars by location', function(assert) {
});

test('should show details for a selected bar', function(assert) {
});

test('As an authenticated user, I can add myself to a bar to indicate I am going there tonight.', function(assert) {
});

test('As an authenticated user, I can remove myself from a bar if I no longer want to go there.', function(assert) {
});

test('As an unauthenticated user, when I login I should not have to search again.', function(assert) {
});
