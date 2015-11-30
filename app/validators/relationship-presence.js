import Base from 'ember-validations/validators/base';

export default Base.extend({
  call: function() {
    if (Ember.isEmpty(this.model.get(this.property).get('content'))) {
      this.errors.pushObject("não pode ser vazio");
    }
  }
});
