import Ember from 'ember';
import MagicCrud from './magic-crud';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create({
  // Validation Object name
  validationObject: 'validations',

  // Definitions Object name
  definitionObject: 'formDefinitionsMC',

  // Magic Crud Options object name
  magicCrudObject: 'magicCrud',

  // Save success message
  saveMessage: 'Record saved successfully',

  canRollbackModel: true,

  // Split route name
  routeSplit: Ember.computed('routeName', function(){
    return this.get('routeName').split('.');
  }),

  // Route base name
  routeBase: Ember.computed('routeSplit', function(){
    return this.get('routeSplit')[0];
  }),

  // Route method name
  routeMethod: Ember.computed('routeSplit', function(){
    return this.get('routeSplit')[1];
  }),

  renderTemplate: function(){
    this.render('magic-crud/form', {
      into: 'application'
    });
  },

  model(){
    return this.store.createRecord(this.get('routeBase'));
  },

  setupController(controller, model) {
    console.log('setupController');
    this._super(controller, model);
    const{
      routeBase,
      validationObject,
      definitionObject,
      magicCrudObject,
    } = getProperties(this, 'routeBase', 'validationObject', 'definitionObject', 'magicCrudObject');

    controller.reopen(MagicCrud);

    [validationObject, definitionObject, magicCrudObject].forEach((obj) => {
        controller.set(obj, this.controllerFor(routeBase).get(obj));
    });

    this.controller.init();
  },

  saveRecordSuccess(){
    let controller = this.get('controller');
    let routeBase = this.get('routeBase');
    let saveMessage = this.get('saveMessage');
    let flashMessages = Ember.get(this, 'flashMessages');

    this.set('canRollbackModel', false);
    controller.get('model').save().then(() => {
      let routeAfter;
      if(controller.get('magicCrud') && (routeAfter = controller.get('magicCrud.routeAfter'))){
        controller.transitionToRoute(routeAfter);
      }
      else{
        controller.transitionToRoute(routeBase);
      }
      flashMessages.success(saveMessage);
    });
  },

  // Fail saving record promisse callback
  saveRecordFail(){
    let controller = this.get('controller');
    let flashMessages = Ember.get(this, 'flashMessages');
    let definitionObject = this.get('definitionObject');

    let errors = controller.get('errors.model');
    for(let item in errors){
      if(errors.hasOwnProperty(item)){
        let definitions = controller.get(definitionObject);
        for(let def in definitions){
          if(definitions[def] && 'model.'+item === definitions[def].attribute && errors.get(item).length){
            flashMessages.danger(definitions[def].label + ' ' + errors.get(item));
          }
        }
      }
    }
  },

  actions:{
    saveRecord(){
      const{
        controller
      } = getProperties(this, 'controller');

      controller.set('submitted', true);
      controller.validate().then(() => {
        this.saveRecordSuccess();
      }, () => {
        this.saveRecordFail();
      });
    },

    // Rollback model
    willTransition() {
      const{
        controller
      } = getProperties(this, 'controller');

      if(this.get('canRollbackModel')){
        controller.get('model').rollback();
        if(controller.get('model').rollbackAttributes){
          controller.get('model').rollbackAttributes();
        }
      }

      this.set('canRollbackModel', true);
    }
  }
});
