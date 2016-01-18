import Ember from 'ember';
import MagicActionRouteMixin from '../../../mixins/magic-action-route';
import { module, test } from 'qunit';

module('Unit | Mixin | magic action route');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicActionRouteObject = Ember.Object.extend(MagicActionRouteMixin);
  var subject = MagicActionRouteObject.create();
  assert.ok(subject);
});
