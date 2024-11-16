module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            },
            dev: {                                       // Another target
                files: {
                    'prebuild/index.html': 'src/index.html',
                }
            }
        },

        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'STYLES_CSS',
                            replacement: './styles/main.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true, flatten: true, src: ['prebuild/index.html'], dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'STYLES_CSS',
                            replacement: './styles/main.min.css'
                        },
                    ]
                },
                files: [
                    {
                        expand: true, flatten: true, src: ['prebuild/index.html'], dest: 'dist/'
                    }
                ]
            }
        },
        watch: {
            less: {
                files: ['src/styles/*.less'],
                tasks: ['less:development']
            },
            htmlmin: {
                files: ['src/index.html'],
                tasks: ['htmlmin:dev']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            },
        },

        clean: ['prebuild']

    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean']);

};