module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {},
            files: ['Gruntfile.js', 'src/js/**/*.js']
        },
        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['src/js/**/*.js'],
                dest: 'dest/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dest/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        sass: {
            base: {
                options: {
                    banner: "/*font end base.css 2014-07-16*/",
                    style: 'compressed',
                    sourcemap: true
                },
                files: {
                    'dest/css/base.min.css': 'src/sass/base.scss',
                    'dest/css/<%= pkg.name %>.min.css': 'src/sass/<%= pkg.name %>.scss'
                }
            }
        },
        jade: {
            compile: {
                files: {
                    'dest/page/index.html': 'src/page/index.jade'
                }
            }
        },
        watch: {
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass']
            },
            jade: {
                files: ['src/page/**/*.jade'],
                tasks: ['jade']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jade');

    //grunt.loadNpmTasks('grunt-contrib-qunit');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'watch', 'jade']);

};