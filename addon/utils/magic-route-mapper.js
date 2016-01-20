import Ember from 'ember';

export default Ember.Object.extend({
  map: function(context, route){
    return context.route(route, function() {
      context.route('add');
      context.route('edit', {path:'edit/:id'});
      context.route('show', {path:'show/:id'})
    });
  }
}
