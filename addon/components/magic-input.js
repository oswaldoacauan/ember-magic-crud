import Ember from 'ember';

export default Ember.Component.extend({

  firstIteration: true,

  // starts the input value
  didInsertElement(){
    this.set('value', this.get(this.get('attribute')));
  },

  // active input errors
  activeErrors: Ember.computed('value', 'model', 'errors', 'submitted', function(){
    if(this.get('firstIteration') !== true){
      return this.get('errors.'+this.get('attribute'));
    }
    this.set('firstIteration', false);
    return null;
  }),

  // input value
  value: Ember.computed('attribute', 'model', {
    set(key, value) {
      this.set(this.get('attribute'), value);
      return value;
    },
    get: function() {
      return this.get(this.get('attribute'));
    }
  })

});
