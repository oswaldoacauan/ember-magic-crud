import Ember from 'ember';
import EmberValidations from 'ember-validations'

export default Ember.Mixin.create(EmberValidations, {
  validations: null,
  definitions: null,
  magicCrud: null,

  reInit: 1,

  init(){
    this._super();
    let definitions = this.get('definitions');
    if(definitions){
      // console.log('123');
      let validations;
      definitions.forEach((definition) => {
        if(!validations){
          validations = {};
        }
        if(definition.validations){
          validations[definition.attribute] = {};
          for(let key in definition.validations){
            validations[definition.attribute][key] = definition.validations[key];
          }
        }
      });

      let base = {};
      if(!Object.keys(this.get('validations')).length)
        this.set('validations', validations);
    }

    if(this.get('reInit') > 0){
      this.set('reInit', this.get('reInit') - 1);
      this.init();
    }
  }
});
