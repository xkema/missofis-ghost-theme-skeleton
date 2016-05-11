module.exports = function( grunt ) {

	// load tasks
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );

	// initialize grunt modules 
	grunt.initConfig( {

		// task :: @see https://github.com/gruntjs/grunt-contrib-watch#watch-task
		watch: {
			dev: {
				files: [ 
					'*.hbs', 'partials/*.hbs',
					'assets/styles/css/*.css', 'assets/styles/skeleton/*.css',
					'assets/scripts/*.js',
				],
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
		// task :: @see https://www.npmjs.com/package/grunt-contrib-copy#getting-started
		,copy: {
			dev: {
				files: [
					{
						expand: true,
						cwd: 'bower_components/skeleton/css/',
						src: [ '*.css' ],
						dest: 'assets/styles/skeleton/',
						filter: 'isFile',
						flatten: true
					}
				]
			}
		}

	} );

	// register custom task for ***
	grunt.registerTask( 'default', [ 'copy:dev', 'sass', 'watch' ] );

	// register theme builder  task
	//grunt.registerTask( 'build', [ 'jshint', 'uglify' ] );

};