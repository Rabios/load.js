// Written by Rabia Alhaffar In 11/May/2020
// load.js, Tiny JavaScript library to load JavaScript libraries!
var loads = 0;
var jslibs = [];
var jslibs_loaded = [];
var jsmodules = [];
var jslibs_executed = [];
var loadjs = {
    version: "v0.0.2",
    load: function(l, f) {       
        for(var i = 0; i < l.length; i++) {
            jslibs.push(document.createElement("script"));
            jslibs[i].src = l[i];
            jslibs[i].async = false;
            jslibs[i].type = "text/javascript";
            document.head.appendChild(jslibs[i]);
            jslibs[i].onload = function() {
                jslibs_loaded[i] = true;
                console.info("INFO: Loading " + l[i - 1]);
                loads++;
                console.info("INFO: " + l[i - 1] + " loaded successfully!");
            }
            jslibs[i].onerror = function() {
                jslibs_loaded[i] = false;
                console.error("ERROR: Loading source " + l[i - 1].src + " failed!");
                loads++;
            }       
        }
        if (typeof(f) == "function") setTimeout(f, 1);
    },
    require: function(l, f, t) {
        if (t) for (var i = 0; i < l.length; i++) {
            require(l[i])();
        } else if (!t) {
            for (var i = 0; i < l.length; i++) {
                console.info("INFO: Loading module: " + l[i]);
                jsmodules[jsmodules.length + 1 + i] = require(l[i]);
            }
        } else {
            console.error("ERROR: Type of require Node.js modules not defined!");
        }
        if (typeof(f) == "function") window.setTimeout(f, 1);
    },
    link: function() {
        for(var i = 0; i < jslibs.length; i++) window.open(jslibs[i].src); 
    }
};
console.info("INFO: Using load.js " + loadjs.version);