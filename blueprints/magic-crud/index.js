var path = require('path');

var getPathOption = function(options){
  var outputPath     = 'components';
  if (options.path) {
    outputPath = options.path;
  } else {
    if (options.path === '') {
      outputPath = '';
    }
  }
  return outputPath;
}

module.exports = {
  description: '',

  fileMapTokens: function() {
    return {
      __controllerpath__: function(options) {
        if (options.pod) {
          return path.join(options.podPath, options.dasherizedModuleName);
        }
        return 'controllers';
      },
      __routepath__: function(options) {
        if (options.pod) {
          return path.join(options.podPath, options.dasherizedModuleName);
        }
        return 'routes';
      },
      __routename__: function(options) {
        if (options.pod) {
          return 'route';
        }
        return options.dasherizedModuleName;
      },
       __controllername__: function(options) {
         if (options.pod) {
           return 'controller';
         }
         return options.dasherizedModuleName;
       },
       __addroutename__: function(options) {
         if (options.pod) {
           return 'add/route';
         }
         return path.join(options.dasherizedModuleName, 'add');
       },
       __editroutename__: function(options) {
         if (options.pod) {
           return 'edit/route';
         }
         return path.join(options.dasherizedModuleName, 'edit');
       },
       __showroutename__: function(options) {
         if (options.pod) {
           return 'show/route';
         }
         return path.join(options.dasherizedModuleName, 'show');
       }
    };
  }
};
