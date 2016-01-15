import Ember from 'ember';

const {
  getProperties
} = Ember;

export default Ember.Mixin.create({
  actions:{
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
  }
});
