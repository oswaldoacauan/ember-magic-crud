import Ember from 'ember';
import MagicDummyRouteMixin from '../../../mixins/magic-dummy-route';
import { module, test } from 'qunit';

module('Unit | Mixin | magic dummy route');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicDummyRouteObject = Ember.Object.extend(MagicDummyRouteMixin);
  var subject = MagicDummyRouteObject.create();
  assert.ok(subject);
});
