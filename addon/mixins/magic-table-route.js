import Ember from 'ember';

const {
  getProperties
} = Ember;

import MagicCrud from './magic-crud';

export default Ember.Mixin.create({
  // Delete success message
  deleteMessageSuccess: 'Record deleted',

  // Delete fail message
  deleteMessageFailed: 'The record couldn\'t be deleted',

  // Route that corresponds to editing
  editRoute: 'edit',

  // Route that corresponds to adding
  addRoute: 'add',

  // Route that corresponds to showing
  showRoute: 'show',

  // Split route name
  routeSplit: Ember.computed('routeName', function(){
    return this.get('routeName').split('.');
  }),

  // Route base name
  routeBase: Ember.computed('routeSplit', function(){
    return this.get('routeSplit')[0];
  }),

  setupController(controller, model) {
    this._super(controller, model);
    const{
      routeBase
    } = getProperties(this, 'routeBase');
    // controller.reopen(MagicCrud);

    controller.set('tableSortPropertiesMC', this.controllerFor(routeBase).get('tableSortPropertiesMC'));
    controller.set('tableOptionsMC', this.controllerFor(routeBase).get('tableOptionsMC'));

    controller.init();
  },

  // Route method name
  routeMethod: Ember.computed('routeSplit', function(){
    return this.get('routeSplit')[1];
  }),

  renderTemplate: function(){
    this.render('magic-crud/table');
  },

  model(){
    return this.store.findAll(this.get('routeBase'));
  },

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

  actions:{
    goToAction(operation, item){
      const{
        routeBase,
        deleteMessageSuccess,
        deleteMessageFailed
      } = getProperties(this, 'routeBase', 'deleteMessageSuccess', 'deleteMessageFailed');

      if(operation === 'delete'){
        this.deleteRecord(item);
      }
      else if(operation === 'add'){
        this.transitionTo(routeBase + '.' + operation);
      }
      else{
        this.transitionTo(routeBase + '.' + operation, item);
      }
    }
  }
});
