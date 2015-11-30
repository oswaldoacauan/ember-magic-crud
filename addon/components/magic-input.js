import Ember from 'ember';

const {
  getProperties
} = Ember;

export default Ember.Component.extend({
  //Flag for disabling errors on first iteration
  firstIteration: true,

  // Starts the input value and type
  didInsertElement(){
    this.set('value', this.get(this.get('attribute')));

    switch (this.get('type')) {
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

  // Select processed content
  processedContent: Ember.computed('selectContent', function(){
    const{
      optionValuePath,
      optionLabelPath,
      selectContent
    } = getProperties(this, 'optionValuePath', 'optionLabelPath', 'selectContent');

    if(this.get('type') == 'select'){
      this.set('processedPath', (optionValuePath) ? 'content.' + optionValuePath : 'content');
      this.set('processedLabel', (optionLabelPath) ? 'content.' + optionLabelPath : 'content');

      let processedContent = this.get('selectContent');

      return processedContent;
    }
    return null;
  }),

  // Active input errors
  activeErrors: Ember.computed('value', 'model', 'errors', 'submitted', function(){
    if(this.get('firstIteration') !== true){
      return this.get('errors.'+this.get('attribute'));
    }
    this.set('firstIteration', false);
    return null;
  }),

  // Input value
  value: Ember.computed('attribute', 'model', {
    set(key, value) {
      this.set(this.get('attribute'), value);
      return value;
    },
    get: function() {
      return this.get(this.get('attribute'));
    }
  }),
  //
  // selectCusomValidate(){
  //   let errors = this.get('errors');
  //   errors["model"]["modelo"] = [];
  //   errors["model"]["modelo"].push("teste");
  //   console.log(this.get('errors'));
  // },

  actions:{
    // onSelectInit(){
    //   this.selectCusomValidate();
    // },
    //
    // onSelectItem(){
    //   this.selectCusomValidate();
    // }
  }

});
