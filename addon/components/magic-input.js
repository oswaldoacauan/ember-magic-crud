import Ember from 'ember';

export default Ember.Component.extend({
  //this is for the errors to be disabled on first iteration
  firstIteration: true,
  names: Ember.A(['Tom', 'Yehuda', 'Mike']),

  // starts the input value and type
  didInsertElement(){
    this.set('value', this.get(this.get('attribute')));

    let inputType = this.get('type');
    switch (inputType) {
      case 'text':
        this.set('text', true);
        break;
      case 'checkbox':
        this.set('checkbox', true);
        break;
      case 'switch':
        this.set('switch', true);
        break;
      case 'select':
        this.get('parentView.targetObject.store').findAll(this.get('selectContent')).then((data)=>{
          this.set('fetchedContent', data);
          this.set('processedPath', 'content.' + this.get('optionValuePath'));
          this.set('processedLabel', 'content.' + this.get('optionLabelPath'));
          if(this.get('fetchedContent')){
            this.set('select', true);
          }
        });
      default:
        break;
    }
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
