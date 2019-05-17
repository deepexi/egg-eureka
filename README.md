# egg-eureka

egg-eureka插件基于[eureka-js-client v4.4.2](https://github.com/jquatier/eureka-js-client)，帮你在eggjs下快速将应用注册到eureka server。

## Install

### 通过npm仓库安装（暂不支持）

```bash
$ npm i egg-eureka --save
```

### 本地安装

```bash
$ git clone http://gitlab.deepexi.top/taccisum/egg-eureka
$ cd ./egg-eureka
$ npm link
$ cd ${your_project_root}
$ npm link @deepexi/egg-eureka
```

## Usage

```js
// {app_root}/config/plugin.js
exports.eureka = {
  enable: true,
  package: '@deepexi/egg-eureka',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.eureka = {
  client: {
    instance: {
      app: 'foo-service',
      ipAddr: '127.0.0.1',
      vipAddress: 'deepexi.foo',
      port: 8080,
    },
    server: {
      host: '192.168.0.239',
      port: 8761,
    },
    // auth: {
    //   user: 'admin',
    //   password: 'deepexi',
    // },
  },
};
```

更多配置可以参考[eureka-js-client](https://github.com/jquatier/eureka-js-client);

## Example

```js
const instances = app.eureka.getInstancesByAppId('foo-service');
// do something via instances info
```

## Questions & Suggestions

empty now.

## License

[MIT](LICENSE)
