//https://github.com/danmarshall/makerjs-smile

var makerjs = require('makerjs');

function smile(span, teeth, droop, dainty, gaze, heady) {

	if (arguments.length == 0) {    
		var defaultValues = makerjs.kit.getParameterValues(smile);
        span = defaultValues.shift();
        teeth = defaultValues.shift();
        droop = defaultValues.shift();
        dainty = defaultValues.shift();
        gaze = defaultValues.shift();
        heady = defaultValues.shift();
	}
    
    this.paths = {
        head: new makerjs.paths.Circle([0, 0], 2.7),
        rightEye: new makerjs.paths.Circle([1, heady], gaze),
        leftEye: new makerjs.paths.Circle([-1, heady], gaze)
    };

    var mouth = new makerjs.models.OvalArc(270 - span, 270 + span, dainty, teeth);
    
    mouth.origin = [0, droop];

    this.models = {
        mouth: mouth
    };
}

smile.metaParameters = [
    { title: "smile span", type: "range", min: 0, max: 90, value: 45 },
    { title: "toothiness", type: "range", min: 0, max: 1, step: 0.05, value: .3 },
    { title: "droopiness", type: "range", min: -1, max: 2, step: 0.1, value: .8 },
    { title: "daintyness", type: "range", min: 0.2, max: 3, step: .1, value: 2 },
    { title: "gazyness", type: "range", min: 0.05, max: 1, step: .05, value: .4 },
    { title: "headyness", type: "range", min: 0.05, max: 2, step: .05, value: .8 }
];

module.exports = smile;
