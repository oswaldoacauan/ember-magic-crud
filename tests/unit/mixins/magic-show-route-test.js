import Ember from 'ember';
import MagicShowRouteMixin from '../../../mixins/magic-show-route';
import { module, test } from 'qunit';

module('Unit | Mixin | magic show route');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicShowRouteObject = Ember.Object.extend(MagicShowRouteMixin);
  var subject = MagicShowRouteObject.create();
  assert.ok(subject);
});
