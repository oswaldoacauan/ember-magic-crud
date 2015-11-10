import Ember from 'ember';

export default Ember.Mixin.create({
  actions:{
    saveRecord(){
      this.set('submitted', true);
      const self = this;

      let flashMessages = Ember.get(this, 'flashMessages');

      this.validate().then(() => {
        this.get('model').save().then(() => {

          let routeAfter = this.get('magicCrud.routeAfter');
          if(routeAfter){
            this.transitionTo(routeAfter);
          }
          let message = this.get('magicCrud.success') || 'Record saved successfully!!';
          flashMessages.success(message);
        });
      }, function(){
        let errors = self.get('errors.model');
        for(let item in errors){
          if(errors.hasOwnProperty(item)){
            let definitions = self.get('definitions');
            for(let def in definitions){
              if(definitions[def] && 'model.'+item === definitions[def].attribute && errors.get(item).length){
                flashMessages.warning(definitions[def].label + ' ' + errors.get(item));
              }
            }
          }
        }
      });
    },
  }
});
