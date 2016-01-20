import Ember from 'ember';
import MagicRouteBaseMixin from '../../../mixins/magic-route-base';
import { module, test } from 'qunit';

module('Unit | Mixin | magic route base');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicRouteBaseObject = Ember.Object.extend(MagicRouteBaseMixin);
  var subject = MagicRouteBaseObject.create();
  assert.ok(subject);
});
