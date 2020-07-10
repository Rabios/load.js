// Written by Rabia Alhaffar In 11/May/2020
// load.js,A tiny JavaScript library to load javascript libs
var loads = 0;
var jslibs = [];
var jslibs_loaded = [];
var jslibs_executed = [];
var loadjs = {
    version: "0.0.1",
    load: function(l, f) {       
        for(var i = 0; i < l.length; i++) {
            jslibs.push(document.createElement("script"));
            jslibs[i].src = l[i];
            jslibs[i].async = false;
            jslibs[i].type = "text/javascript";
            document.head.appendChild(jslibs[i]);
            jslibs[i].onload = function() {
                jslibs_loaded[i] = true;
                console.info("Loading source: " + l[i - 1]);
                loads++;   
            }
            jslibs[i].onerror = function() {
                jslibs_loaded[i] = false;
                console.error("Loading source failed from: " + l[i - 1].src);
                loads++;
            }       
        }  
        if (typeof(f) == "function") setTimeout(f, 1);       
    },
    link: function() {
        for(var i = 0; i < jslibs.length; i++) window.open(jslibs[i].src);  
    }
};
console.info("Using loadjs Version " + loadjs.version);