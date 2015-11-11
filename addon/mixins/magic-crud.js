import Ember from 'ember';
import EmberValidations from 'ember-validations'

export default Ember.Mixin.create(EmberValidations, {
  validations: null,
  definitions: null,
  magicCrud: null,
});
