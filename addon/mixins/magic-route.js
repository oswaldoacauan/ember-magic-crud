import Ember from 'ember';
import MagicCrud from './magic-crud';

const {
  getProperties
} = Ember;

let capitalize = function(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Ember.Mixin.create(MagicCrud, {

  // This is for the objects not to change and mess up the observers
  editDone: false,

  // Validation Object name
  validationObject: 'validations',

  // Definitions Object name
  definitionObject: 'formDefinitionsMC',

  // Magic Crud Options object name
  magicCrudObject: 'magicCrud',

  // Route that corresponds to editing
  editRoute: 'edit',

  // Route that corresponds to adding
  addRoute: 'add',

  // Template for the form
  formTemplate: 'magic-crud/form',

  // Template for the table
  tableTemplate: 'magic-crud/table',

  // Save success message
  saveMessage: 'Record saved successfully',

  // Delete success message
  deleteMessageSuccess: 'Record deleted',

  // Delete fail message
  deleteMessageFailed: 'The record couldn\'t be deleted',

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

  // Route's model
  model: function(param){
    const{
      addRoute,
      editRoute,
      routeBase,
      routeMethod
    } = getProperties(this, 'addRoute', 'editRoute', 'routeBase', 'routeMethod');

    switch (routeMethod) {
      case addRoute:
        return this.store.createRecord(routeBase);
      case editRoute:
        return this.store.findRecord(routeBase, param.id);
      default:
        return this.store.findAll(routeBase);
    }
  },

  // Sets controller's route name related properties
  setControllerRouteNameMethod(){
    const{
      controller,
      routeBase,
      routeMethod,
    } = getProperties(this, 'controller', 'routeBase', 'routeMethod');

    controller.setProperties({
      capitalModelName: (routeBase) ? capitalize(routeBase) : null,
      capitalMethodName: (routeMethod) ? capitalize(routeMethod) : null
    });
  },

  // Mixin and set controller definitions
  mixinAndSetControllerDefinitionObjects(){
    const{
      controller,
      routeBase,
      validationObject,
      definitionObject,
      magicCrudObject,
    } = getProperties(this, 'controller', 'routeBase', 'validationObject', 'definitionObject', 'magicCrudObject');

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

    if(!controller.get('sortProperties')){
      controller.set('sortProperties', []);
    }
  },

  // Set templates for controller rendering
  setTemplatesToRender(){
    const{
      controller,
      formTemplate,
      tableTemplate
    } = getProperties(this, 'controller', 'formTemplate', 'tableTemplate');

    let formTemplateRenderer = function(){
      this.render(formTemplate, {
        outlet: 'magic-form',
        controller: controller
      });
    };

    let tableTemplateRenderer = function(){
      this.render(tableTemplate, {
        controller: controller
      });
    };

    if(this.isAnActionRoute()){
      this.set('renderTemplate', formTemplateRenderer);
    }
    else{
      this.set('renderTemplate', tableTemplateRenderer);
    }
  },

  // True if route is edit or add
  isAnActionRoute(){
    const{
      routeMethod,
      addRoute,
      editRoute,
    } = getProperties(this, 'routeMethod', 'addRoute', 'editRoute');

    return routeMethod === addRoute || routeMethod === editRoute;
  },

  // Sets up the Route's Controller
  setupController(controller, model) {
    const{
      editRoute,
      routeMethod,
      editDone
    } = getProperties(this, 'editRoute', 'routeMethod', 'editDone');

    this._super(controller, model);
    this.setControllerRouteNameMethod();
    this.setTemplatesToRender();

    if(this.isAnActionRoute()){
      if(editDone && routeMethod === editRoute){
        return;
      }
      this.mixinAndSetControllerDefinitionObjects();
      this.set('editDone', true);
    }
    this.controller.init();
  },

  // Success saving record promisse callback
  saveRecordSuccess(){
    let controller = this.get('controller');
    let routeBase = this.get('routeBase');
    let saveMessage = this.get('saveMessage');
    let flashMessages = Ember.get(this, 'flashMessages');

    controller.get('model').save().then(() => {
      let routeAfter;
      if(controller.get('magicCrud') && (routeAfter = controller.get('magicCrud.routeAfter'))){
        controller.transitionTo(routeAfter);
      }
      else{
        controller.transitionTo(routeBase);
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

  // Route Actions
  actions: {
    //Delete record from store
    deleteRecord(item){
      const{
        routeBase,
        deleteMessageSuccess,
        deleteMessageFailed
      } = getProperties(this, 'routeBase', 'deleteMessageSuccess', 'deleteMessageFailed');

      this.transitionTo(routeBase);
      let flashMessages = Ember.get(this, 'flashMessages');

      item.deleteRecord();
      item.save().then(() => {
        flashMessages.success(deleteMessageSuccess);
      },() => {
        flashMessages.danger(deleteMessageFailed);
      });
    },

    // Transition to edit route
    editRecord(item){
      const{
        routeBase,
        editRoute
      } = getProperties(this, 'routeBase', 'editRoute');

      this.transitionTo(routeBase + '.' + editRoute, item);
    },

    // Transition to add route
    addRecord(){
      const{
        routeBase,
        addRoute
      } = getProperties(this, 'routeBase', 'addRoute');

      this.transitionTo(routeBase + '.' + addRoute);
    },

    // Save record
    saveRecord(){
      const{
        controller
      } = getProperties(this, 'controller');

      this.set('canRollbackModel', false);

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

      if(this.isAnActionRoute() && this.get('canRollbackModel')){
        controller.get('model').rollback();
        if(controller.get('model').rollbackAttributes){
          controller.get('model').rollbackAttributes();
        }
      }

      this.set('canRollbackModel', true);
    }
  }
});
