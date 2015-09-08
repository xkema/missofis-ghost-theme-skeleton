module.exports = function( grunt ) {

	// load tasks
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// initialize grunt modules 
	grunt.initConfig( {

		// task :: @see https://github.com/gruntjs/grunt-contrib-watch#watch-task
		watch: {
			dev: {
				files: [ '*.hbs', 'partials/*.hbs', 'assets/**' ],
				options: {
					livereload: true
				}
			},
			configFiles: {
				files: 'Gruntfile.js',
				options: {
					reload: true
				}
			}
		}

	} );

	// register custom task for ***
	grunt.registerTask( 'default', [ 'watch' ] );

	// register theme builder  task
	//grunt.registerTask( 'build', [ 'jshint', 'uglify' ] );

};