import Ember from 'ember';

const {
  getProperties
} = Ember;

export default Ember.Component.extend({
  //this is for the errors to be disabled on first iteration
  firstIteration: true,

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
          this.set('select', true);
          break;
      default:
        break;
    }
  },

  processedContent: Ember.computed('selectContent', function(){
    const{
      optionValuePath,
      optionLabelPath,
      selectContent
    } = getProperties(this, 'optionValuePath', 'optionLabelPath', 'selectContent');

    this.set('processedPath', 'content');
    this.set('processedLabel', 'content');

    if(this.get('type') == 'select'){
      this.set('processedPath', 'content.' + optionValuePath);
      this.set('processedLabel', 'content.' + optionLabelPath);

      let processedContent = null;
      // console.log(this.get('selectContent'));
      processedContent = this.get('selectContent');

      return processedContent;
    }

    return null;
  }),

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
