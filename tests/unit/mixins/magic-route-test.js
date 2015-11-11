import Ember from 'ember';
import MagicRouteMixin from '../../../mixins/magic-route';
import { module, test } from 'qunit';

module('Unit | Mixin | magic route');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicRouteObject = Ember.Object.extend(MagicRouteMixin);
  var subject = MagicRouteObject.create();
  assert.ok(subject);
});
