module.exports = {
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    var _this = this;
    return _this.addPackagesToProject([{name: 'ember-cli-selectize', target: 'latest'}]);
  }
};
