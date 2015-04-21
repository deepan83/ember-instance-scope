import Ember from 'ember';
import InstanceScopeMixin from '../../../mixins/instance-scope';
import { module, test } from 'qunit';

module('InstanceScopeMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var InstanceScopeObject = Ember.Object.extend(InstanceScopeMixin);
  var subject = InstanceScopeObject.create();
  assert.ok(subject);
});
