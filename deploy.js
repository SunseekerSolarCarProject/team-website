/* Load Modules */
var browserify = require('browserify');
var glob       = require('glob');
var fs         = require('fs');

/* Variable declarations */
var config;

/* Configuration */
config = {
	js: {
		src:  '_js/',
		dest: 'js/'
	}
};

/* Browserify task */
console.log('Browserify-ing JavaScripts');

glob('*.js', {cwd: config.js.src}, function (err, files) {
	if (err) return console.log('Could not get list of js files.');

	files.forEach(function (f) {
		console.log('\tBrowserify-ing ' + f);
		var ws;

		ws = fs.createWriteStream(config.js.dest + f);

		browserify(config.js.src + f).bundle().pipe(ws);
	});
});
