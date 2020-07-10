# load.js
Tiny JavaScript library to load external JavaScript files (scripts) or libraries

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

> NOTES: This project is old so it won't receive updates
