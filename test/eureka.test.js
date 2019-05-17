'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/eureka.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/eureka-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should fetch instances info', () => {
    const appId = app.config.eureka.client.instance.app;
    console.log(`fetch ${appId}\'s instances info`);
    const instances = app.eureka.getInstancesByAppId(appId);
    console.log(instances);
    assert(instances.length === 1, 'should fetch instance from eureka server');
  });
});
