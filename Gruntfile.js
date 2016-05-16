module.exports = function( grunt ) {

	// load tasks
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	// initialize grunt modules 
	grunt.initConfig( {

		// task :: @see https://github.com/gruntjs/grunt-contrib-watch#watch-task
		watch: {
			dev: {
				files: [ 
					'*.hbs', 'partials/*.hbs',
					'assets/css/*.css',
					'assets/js/*.js'
				],
				options: {
					livereload: true
				}
			},
			sass: {
				files: [ '_assets/styles/scss/*.scss' ],
				tasks: [ 'sass' ]
			},
			jscopy: {
				files: [ '_assets/scripts/main.js' ],
				tasks: [ 'uglify:dev' ]
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
					style: 'compressed', // nested, compact, compressed, expanded
					noCache: true,
					update: true
				},
				files: {
					'assets/css/screen.css': '_assets/styles/scss/main.scss'
				}
			}
		}
		// task :: @see https://www.npmjs.com/package/grunt-contrib-copy#getting-started
		,copy: {
			dev: {
				files: [
					{
						src: 'bower_components/skeleton/css/normalize.css',
						dest: '_assets/styles/scss/_normalize.scss',
					},
					{
						src: 'bower_components/skeleton/css/skeleton.css',
						dest: '_assets/styles/scss/_skeleton.scss'
					}
				],
				options: {
					process: function( content, srcpath ) {
						return content.replace( /–/g, '-' );
					}
				}
			}
		}
		// task :: @see https://www.npmjs.com/package/grunt-contrib-uglify#getting-started
		,uglify: {
			options: {
				mangle: true
			},
			dev: {
				files: [
					{
						'assets/js/main.js': [ '_assets/scripts/main.js' ]
					}
				]
			}
		}

	} );

	// register custom task for development
	grunt.registerTask( 'default', [ 'copy:dev', 'uglify:dev', 'sass', 'watch' ] );

	// register theme builder  task
	//grunt.registerTask( 'build', [ 'jshint', 'uglify' ] );

};