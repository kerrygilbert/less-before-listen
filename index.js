var less = require('less');
var fs = require('fs');
var path = require('path');

module.exports = function() {
  return new LessParser();
}

var LessParser = function() {
  var self = this;
  self.parse = function(file, callback) {
    var parser = new(less.Parser)({
      paths: [path.dirname(file)], // Specify search paths for @import directives
      filename: file // Specify a filename, for better error messages
    });

    parser.parse(fs.readFileSync(file, 'utf8'), function(err, tree) {
      if(err) {
        return callback(err);
      } 

      return fs.writeFile(file.replace(/\.less$/, '.css'), tree.toCSS(), function(err){
        if(err) {
          return callback(err);
        }

        return callback(null);
      });
    });
  }  
}

