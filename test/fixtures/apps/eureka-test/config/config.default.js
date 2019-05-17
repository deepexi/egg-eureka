'use strict';

exports.eureka = {
  client: {
    instance: {
      app: 'plugin-test-service',
      ipAddr: '127.0.0.1',
      vipAddress: 'plugin.test',
      port: 8080,
    // statusPageUrl: `http://${instanceIp}:${instancePort}/${config.appContext}/info`,
    // homePageUrl: `http://${instanceIp}:${instancePort}/${config.appContext}`,
    // healthPageUrl: `http://${instanceIp}:${instancePort}/${config.appContext}/health`,
    },
    server: {
      host: '192.168.0.239',
      port: 8761,
    },
    auth: {
      user: 'admin',
      password: 'deepexi',
    },
  },
};

exports.keys = '123456';
