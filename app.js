'use strict';
const Eureka = require('eureka-js-client').Eureka;
const assert = require('assert');

module.exports = app => {
  if (app.config.eureka.enabled) {
    app.addSingleton('eureka', creator);
  } else {
    app.coreLogger.warn('plugin egg-eureka has been disabled!');
  }
};

function _assert(config, keys) {
  keys.forEach(key => {
    assert(config[key], `[egg-eureka] Must set \`${key}\` in eureka\'s config`);
    return key;
  });
}

/**
 * 自动补充实例配置
 */
function _implementInstanceInfo(config) {
  if (!isNaN(Number(config.port))) {
    config.port = {
      $: config.port,
      '@enabled': true,
    };
  }

  // TODO::
  return config;
}

function asyncStart(client) {
  const promise = new Promise((resolve, reject) => {
    client.start(err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
  return promise;
}

async function creator(config, app) {
  _assert(config.instance, [ 'app', 'ipAddr', 'vipAddress', 'port' ]);
  _assert(config.server, [ 'host', 'port' ]);

  app.coreLogger.info(`registry to eureka server: ${config.server.host}:${config.server.port}${config.server.servicePath}`);

  const cfg = {
    instance: _implementInstanceInfo(config.instance),
    eureka: config.server,
  };

  if (config.auth) {
    cfg.requestMiddleware = (requestOpts, done) => {
      requestOpts.auth = config.auth;
      done(requestOpts);
    };
  }

  const client = new Eureka(cfg);
  app.beforeStart(async () => {
    console.log('start eureka client');
    await asyncStart(client);
  });

  app.beforeClose(async () => {
    if (client) {
      console.log('stop eureka client');
      client.stop && await client.stop();
    }
  });

  return client;
}
