import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import RSVP from 'rsvp';
import wait from 'ember-test-helpers/wait';

const ITEMS = [{name: 'Wine Bar'}, {name: 'Sports Bar'}, {name: 'Dive Bar'}];
const FILTERED_ITEMS = [{name: 'Wine Bar'}];

moduleForComponent('bar-name-filter', 'Integration | Component | bar name filter', {
  integration: true
});

test('should initially load all listings', function (assert) {
  this.on('filterByName', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
    {{#bar-name-filter filter=(action 'filterByName') as |results|}}
      <ul class="results">
        {{#each results as |item|}}
          <li class="name">
            {{item.name}}
          </li>
        {{/each}}
      </ul>
    {{/bar-name-filter}}
  `);

  return wait().then(() => {
    assert.equal(this.$('.name').length, 3);
    assert.equal(this.$('.name').first().text().trim(), 'Wine Bar');
  })
});

test('should update with matching listings', function (assert) {
  this.on('filterByName', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
    {{#bar-name-filter filter=(action 'filterByName') as |results|}}
      <ul class="results">
        {{#each results as |item|}}
          <li class="name">
            {{item.name}}
          </li>
        {{/each}}
      </ul>
    {{/bar-name-filter}}
  `);

  // Simulate the value and the key up which calls the filter method
  this.$('.list-filter input').val('Wine').keyup();

  return wait().then(() => {
    assert.equal(this.$('.name').length, 1);
    assert.equal(this.$('.name').first().text().trim(), 'Wine Bar');
  })
});