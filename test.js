var makerjs = require('makerjs');
var smile = require('./smile.js');

console.log(makerjs.exporter.toSVG(new smile(45, .3, .8, 2, .4, .8)));
