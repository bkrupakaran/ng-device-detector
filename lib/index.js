var rootDir = __dirname + '/';

module.exports = {

  config: function (conf) {
    console.log('Using iui-general directive');
    conf.client.head.scripts.push(conf.client.app.root + '$ng-device-detector/dist/core-module-setup.js');
    conf.client.head.scripts.push(conf.client.app.root + '$ng-device-detector/dist/ng-device-detector.min.js');    
  },

  app: function (app, conf) {
    app.get('/\\$ng-device-detector/*', function (req, res) {
      res.sendfile(rootDir + req.params[0]);
    });
  }
};