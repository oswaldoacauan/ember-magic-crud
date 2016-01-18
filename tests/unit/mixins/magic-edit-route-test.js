import Ember from 'ember';
import MagicEditRouteMixin from '../../../mixins/magic-edit-route';
import { module, test } from 'qunit';

module('Unit | Mixin | magic edit route');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicEditRouteObject = Ember.Object.extend(MagicEditRouteMixin);
  var subject = MagicEditRouteObject.create();
  assert.ok(subject);
});
