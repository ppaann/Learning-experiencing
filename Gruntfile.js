'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean:{
			output: ['ToBeCleaned/*']
		},
		jshint:{
			options:{
				predef:['angular'],
				'-W097': false
			},
			files:['./js/*.js']
			
		},
	});

	// load plugins
	grunt.loadNpmTasks("grunt-contrib-jshint");

	// create grunt entry point
	grunt.registerTask("default", ['jshint']);
};