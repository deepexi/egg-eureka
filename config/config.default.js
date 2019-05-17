'use strict';
const os = require('os');

/**
 * egg-eureka default config
 * @member Config#eureka
 * @property {String} SOME_KEY - some description
 */
exports.eureka = {
  enabled: true,
  client: {
    instance: {
      //   app: 'app_id',
      //   ipAddr: '127.0.0.1',
      //   vipAddress: 'vip.app',
      //   port: 8080,
      //   statusPageUrl: `http://${instanceIp}:${instancePort}/${config.appContext}/info`,
      //   homePageUrl: `http://${instanceIp}:${instancePort}/${config.appContext}`,
      //   healthPageUrl: `http://${instanceIp}:${instancePort}/${config.appContext}/health`,

      hostName: os.hostname(),
      dataCenterInfo: {
        name: 'MyOwn',
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      },
    },
    server: {
      // host: '127.0.0.1',
      // port: 8761,
      registryFetchInterval: 3000,
      servicePath: '/eureka/apps/',
    },
    // auth: {
    //   user: 'admin',
    //   password: 'deepexi',
    // },
  },
};
