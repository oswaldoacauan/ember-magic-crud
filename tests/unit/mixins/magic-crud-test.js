import Ember from 'ember';
import MagicCrudMixin from '../../../mixins/magic-crud';
import { module, test } from 'qunit';

module('Unit | Mixin | magic crud');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicCrudObject = Ember.Object.extend(MagicCrudMixin);
  var subject = MagicCrudObject.create();
  assert.ok(subject);
});
