module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {},
            files: ['Gruntfile.js', 'build/js/**/*.js']
        },
        // concat: {
        //     options: {
        //         separator: ''
        //     },
        //     dist: {
        //         src: ['build/js/**/*.js'],
        //         dest: 'js/main.js'
        //     }
        // },
        // uglify: {
        //     options: {
        //         banner: '/*! main <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        //     },
        //     dist: {
        //         files: {
        //             'js/main.min.js': ['<%= concat.dist.dest %>']
        //         }
        //     }
        // },
        sass: {
            base: {
                options: {
                    banner: "/*font end base.css*/",
                    compass: true
                },
                files: {
                    'css/base.min.css': 'build/sass/base.scss',
                    'css/main.min.css': 'build/sass/main.scss'
                }
            }
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: {
                    'index.html': 'build/page/index.jade',
                    'page/dialog.html': 'build/page/dialog.jade'
                }
            }
        },
        watch: {
            sass: {
                files: ['build/sass/**/*.scss'],
                tasks: ['sass']
            },
            jade: {
                files: ['build/page/**/*.jade'],
                tasks: ['jade']
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jade');

    //grunt.loadNpmTasks('grunt-contrib-qunit');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['jshint', 'sass', 'jade', 'watch']);

};