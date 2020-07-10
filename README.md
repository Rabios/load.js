# load.js
Tiny JavaScript library to load external JavaScript files (scripts) or libraries

## Use case
```javascript
loadjs.version             // Returns current version of load.js
loadjs.load([ "lib.js" ]); // We simply loaded a file named "lib.js"

// Another example
loadjs.load([ "lib.js" ], function() {
    // Do something when libraries/scripts loaded
});

// View source code of JavaScript libraries loaded by load.js
loadjs.link();
```

> NOTES: This project is old so it won't receive updates
