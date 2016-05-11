module.exports = function( grunt ) {

	// load tasks
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );

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
			sass: {
				files: [ 'assets/styles/scss/*.scss' ],
				tasks: [ 'sass' ]
			},
			configFiles: {
				files: 'Gruntfile.js',
				options: {
					reload: true
				}
			}
		}
		// task :: @see https://www.npmjs.com/package/grunt-contrib-sass
		,sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'assets/styles/css/main.css': 'assets/styles/scss/main.scss'
				}
			}
		}

	} );

	// register custom task for ***
	grunt.registerTask( 'default', [ 'sass', 'watch' ] );

	// register theme builder  task
	//grunt.registerTask( 'build', [ 'jshint', 'uglify' ] );

};