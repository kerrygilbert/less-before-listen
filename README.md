# Less Before Listen
Use this to compile your less files when starting up your node server. Not much to explain here.

### Usage
```javascript
var less = require('less-before-listen')();

// Do some other stuff... 

less.parse('path/to/styles.less', function(){
  server.listen(3000);
});
```

You styles.less file will be copied and compiled into a styles.css file in the same directory. Any @import statements in your less file will be honored so don't be shy!