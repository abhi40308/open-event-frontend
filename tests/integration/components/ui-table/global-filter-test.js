import { module, test } from 'qunit';
import { setupIntegrationTest } from 'open-event-frontend/tests/helpers/setup-integration-test';
import hbs from 'htmlbars-inline-precompile';
import { render } from '@ember/test-helpers';

module('Integration | Component | ui table/global filter', function(hooks) {
  setupIntegrationTest(hooks);

  const messages = { searchPlaceholder: 'Search' };
  test('it renders', async function(assert) {
    this.set('messages', messages);
    await render(hbs `{{ui-table/global-filter messages=messages}}`);
    assert.ok(this.element.innerHTML.trim().includes('Search'));
  });
});
