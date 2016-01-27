import Ember from 'ember';
import MagicBaseRoute from './magic-base-route';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create(MagicBaseRoute, {
  // Delete success message
  deleteMessageSuccess: 'Record deleted',

  // Delete fail message
  deleteMessageFailed: 'The record couldn\'t be deleted',

  setupController(controller, model) {
    this._super(controller, model);
    const{
      routeBase
    } = getProperties(this, 'routeBase');

    controller.set('magicCrud', this.controllerFor(routeBase).get('magicCrud'));
    controller.set('tableSortPropertiesMC', this.controllerFor(routeBase).get('tableSortPropertiesMC'));
    controller.set('tableOptionsMC', this.controllerFor(routeBase).get('tableOptionsMC'));

    controller.init();
  },

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
