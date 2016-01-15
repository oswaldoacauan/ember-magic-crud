import Ember from 'ember';
import MagicTableRouteMixin from '../../../mixins/magic-table-route';
import { module, test } from 'qunit';

module('Unit | Mixin | magic table route');

// Replace this with your real tests.
test('it works', function(assert) {
  var MagicTableRouteObject = Ember.Object.extend(MagicTableRouteMixin);
  var subject = MagicTableRouteObject.create();
  assert.ok(subject);
});
