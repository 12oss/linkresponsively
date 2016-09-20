module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: ['docs/global/css/bootstrap.min.css',
					'docs/global/css/jquery.fancybox.css',
					'docs/global/css/prettify.css',
					'docs/global/css/style.css'
				],

				dest: 'docs/global/build/css/linkresponsibly.css'
			},
			js: {
				options: {
					separator: ';',
				},
				src: [
					'docs/global/js/bootstrap.min.js',
					'docs/global/js/jquery.fancybox.pack.js',
					'docs/global/js/prettify.js',
					'docs/global/js/script.js'
				],

				dest: 'docs/global/build/js/linkresponsibly.js'
			}
		},
		cssmin: {
			css: {
				src: 'docs/global/build/css/linkresponsibly.css',
				dest: 'docs/global/build/css/min/linkresponsibly.min.css'
			}
		},
		uglify: {
			js: {
				src: 'docs/global/build/js/linkresponsibly.js',
				dest: 'docs/global/build/js/min/linkresponsibly.min.js'
			}
		},
		watch: {
			css: {
				files: ['docs/global/css/*.css'],
				tasks: ['concat:css', 'cssmin:css']
			},
			js: {
				files: ['docs/global/js/*.js'],
				tasks: ['concat:js', 'uglify:js']
			},
		}

	});

	// 2. Where we tell Grunt we plan to use this plug-in.
	/*grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-serve');*/
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'watch']);

};
