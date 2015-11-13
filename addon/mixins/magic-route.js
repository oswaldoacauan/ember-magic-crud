import Ember from 'ember';
import MagicCrud from './magic-crud';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create(MagicCrud, {
  // This is for the objects not to change and mess up the observers
  editDone: false,

  // Validation options
  validationObject: 'validations',

  // Definitions of the form
  definitionObject: 'definitions',

  // Settings for the crud
  magicCrudObject: 'magicCrud',

  // Route that corresponds to editing
  editRoute: 'edit',

  // Route that corresponds to adding
  addRoute: 'add',

  // Template for the form
  formTemplate: 'magic-crud/form',

  // Template for the table
  tableTemplate: 'magic-crud/table',

  // Sets up the model for the route
  model: function(param){
    const{
      addRoute,
      editRoute
    } = getProperties(this, 'addRoute', 'editRoute');

    let routeBase = this.get('routeName').split('.')[0];
    let routeMethod = this.get('routeName').split('.')[1];

    if(routeMethod == addRoute){
      return this.store.createRecord(routeBase);
    }
    else if(routeMethod == editRoute){
      return this.store.findRecord(routeBase, param.id);
    }
    return this.store.findAll(routeBase);
  },

  //
  setupController(controller, model) {
    const{
      addRoute,
      editRoute,
      validationObject,
      definitionObject,
      magicCrudObject
    } = getProperties(this, 'addRoute', 'editRoute', 'validationObject', 'definitionObject', 'magicCrudObject');

    this._super(controller, model);

    let routeBase = this.get('routeName').split('.')[0];
    let routeMethod = this.get('routeName').split('.')[1];

    controller.set('modelName', routeBase);
    controller.set('methodName', routeMethod);
    if(routeBase && routeMethod){
      controller.set('cptModelName', routeBase.charAt(0).toUpperCase() + routeBase.slice(1));
      controller.set('cptMethodName', routeMethod.charAt(0).toUpperCase() + routeMethod.slice(1));
    }

    let formTemplate = function(){
      this.render(this.get('formTemplate'), {
        outlet: 'magic-form',
        controller: controller
      });
    }

    let tableTemplate = function(){
      this.render(this.get('tableTemplate'), {
        controller: controller
      });
    }

    if(routeMethod == addRoute || routeMethod == editRoute){
      this.set('renderTemplate', formTemplate);
    }
    else{
      this.set('renderTemplate', tableTemplate);
    }

    if(routeMethod == addRoute || routeMethod == editRoute){

      if(this.get('editDone') && routeMethod == editRoute){
        return;
      }

      controller.reopen(MagicCrud);

      if(!controller.get(validationObject)){
        controller.set(validationObject, this.controllerFor(routeBase).get(validationObject));
      }

      if(!controller.get(definitionObject)){
        controller.set(definitionObject, this.controllerFor(routeBase).get(definitionObject));
      }

      if(!controller.get(magicCrudObject)){
        controller.set(magicCrudObject, this.controllerFor(routeBase).get(magicCrudObject));
      }

      this.set('editDone', true);
    }

    this.controller.init();
  },

  actions: {
    deleteRecord(item){
      let routeMethod = this.get('routeName').split('.')[0];

      this.transitionTo(routeMethod);
      let flashMessages = Ember.get(this, 'flashMessages');

      item.deleteRecord();
      item.save();

      flashMessages.success('Record deleted');
    },

    editRecord(item){
      if(!item.get('isDirty')){
        let routeMethod = this.get('routeName').split('.')[0];

        this.transitionTo(routeMethod + '.edit', item);
      }
    },

    addRecord(){
      let routeMethod = this.get('routeName').split('.')[0];

      this.transitionTo(routeMethod + '.add');
    },

    saveRecord(){
      let controller = this.get('controller');

      controller.set('submitted', true);

      let flashMessages = Ember.get(this, 'flashMessages');

      controller.validate().then(() => {
        controller.get('model').save().then(() => {

          let routeAfter = controller.get('magicCrud.routeAfter');
          if(routeAfter){
            controller.transitionTo(routeAfter);
          }
          let message = controller.get('magicCrud.success') || 'Record saved successfully!!';
          flashMessages.success(message);
        });
      }, function(){
        let errors = controller.get('errors.model');
        for(let item in errors){
          if(errors.hasOwnProperty(item)){
            let definitions = controller.get('definitions');
            for(let def in definitions){
              if(definitions[def] && 'model.'+item === definitions[def].attribute && errors.get(item).length){
                flashMessages.danger(definitions[def].label + ' ' + errors.get(item));
              }
            }
          }
        }
      });
    },

    willTransition(transition) {
      let routeMethod = this.get('routeName').split('.')[1];

      if(routeMethod == 'add' || routeMethod == 'edit'){
        this.get('controller').get('model').rollback();
      }
    }
  }
});
