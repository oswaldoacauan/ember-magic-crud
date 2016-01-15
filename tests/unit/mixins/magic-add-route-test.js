import Ember from 'ember';
import MagicAddRouteMixin from '../../../mixins/magic-add-route';
import { module, test } from 'qunit';

module('Unit | Mixin | magic add route');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicAddRouteObject = Ember.Object.extend(MagicAddRouteMixin);
  var subject = MagicAddRouteObject.create();
  assert.ok(subject);
});
