import Ember from 'ember';

export default Ember.Mixin.create({
  // Split route name
  routeSplit: Ember.computed('routeName', function(){
    return this.get('routeName').split('.');
  }),

  // Route base name
  routeBase: Ember.computed('routeSplit', function(){
    return this.get('routeSplit')[0];
  }),
});
