# load.js
Tiny JavaScript library to load/require external JavaScript files (scripts) or libraries or even modules

## Use case
```javascript
loadjs.version             // Returns current version of load.js
loadjs.load([ "lib.js" ]); // We simply loaded a file named "lib.js"

// Another example
loadjs.load([ "lib.js" ], function() {
    // Do something when libraries/scripts loaded
});

// Require a bunch of Node.js modules (You can null the function)
// If third parameter set to true then it will also run them if they have module.export
loadjs.require([ "lib.js" ], null, true);

// Else if default Node.js module,Set third parameter to false
loadjs.require([ "lib.js" ], null, false);
// Use first required Node.js module
console.log(jsmodules[0].add(10, 3));

// View source code of JavaScript libraries loaded by load.js
loadjs.link();
```

> NOTES: This project is old so it won't receive updates
