module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		stylus: {
			dist: {
				files: {
					"app/dist/main.css": "app/styles/main.styl"
				}
			}
		},
		cssmin: {
			dist: {
				files: {
					"app/dist/main.min.css": "app/dist/main.css"
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task.
	grunt.registerTask('forever-do', ['stylus', 'cssmin']);
};