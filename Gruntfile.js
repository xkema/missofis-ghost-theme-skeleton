module.exports = function( grunt ) {

	// load tasks
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-less' );

	// initialize grunt modules 
	grunt.initConfig( {

		// task :: @see https://github.com/gruntjs/grunt-contrib-watch#watch-task
		watch: {
			dev: {
				files: [ '*.hbs', 'partials/*.hbs', 'assets/css/**', 'assets/js/**', 'assets/images/**', 'assets/fonts/**' ],
				options: {
					livereload: true
				}
			},
			less: {
				files: [ 'assets/less/__screen.less' ],
				tasks: [ 'less' ]
			},
			configFiles: {
				files: 'Gruntfile.js',
				options: {
					reload: true
				}
			}
		},
		// task :: @see https://www.npmjs.com/package/grunt-contrib-less
		less: {
			dev: {
				files: { 'assets/css/screen.css': 'assets/less/__screen.less' }
			}
		}

	} );

	// register custom task for ***
	grunt.registerTask( 'default', [ 'watch' ] );

	// register theme builder  task
	//grunt.registerTask( 'build', [ 'jshint', 'uglify' ] );

};