# load.js
tiny JavaScript to load external JavaScript files or libraries

## Use case
```javascript
loadjs.load([ "lib.js" ]); // We simply loaded a file named "lib.js"

// Another example but with running function
loadjs.load([ "lib.js" ], function() {
    // Do something
});

// View source code of JavaScript libraries loaded by load.js
loadjs.link();
```