import Ember from 'ember';
import MagicActionRoute from './magic-action-route';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create(MagicActionRoute, {
  renderTemplate: function(){
    this.render('magic-crud/form', {
      into: 'application'
    });
  },

  model(param){
    return this.store.findRecord(this.get('routeBase'), param.id);
  }
});
