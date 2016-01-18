import Ember from 'ember';

const {
  getProperties
} = Ember;

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

  // Route method name
  routeMethod: Ember.computed('routeSplit', function(){
    return this.get('routeSplit')[1];
  }),

  renderTemplate: function(){
    this.render('magic-crud/table', {
      into: 'application'
    });
  },

  model(){
    return this.store.findAll(this.get('routeBase'));
  },

  actions:{
    showRecord(item){
      const{
        routeBase,
        showRoute
      } = getProperties(this, 'routeBase', 'showRoute');

      this.transitionTo(routeBase + '.' + showRoute, item);
    },

    addRecord(){
      const{
        routeBase,
        addRoute
      } = getProperties(this, 'routeBase', 'addRoute');

      this.transitionTo(routeBase + '.' + addRoute);
    },

    editRecord(item){
      const{
        routeBase,
        editRoute
      } = getProperties(this, 'routeBase', 'editRoute');

      this.transitionTo(routeBase + '.' + editRoute, item);
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
  }
});
