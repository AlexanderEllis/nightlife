import Ember from 'ember';

export default Ember.Component.extend({
    isWide: false, // Pass this key/value to the component template, which we can then use with hbs logic
    actions: { // We can define all of the actions accessible by the component template
        toggleImageSize() {
            this.toggleProperty('isWide');
        }
    }
});
