import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | event topic', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    let record = run(() => this.owner.lookup('service:store').createRecord('event-topic'));

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
