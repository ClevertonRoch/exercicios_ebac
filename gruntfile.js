module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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

    watch: {
      less: {
        files: ['src/**/*.less'],
        tasks: ['less:development']
      },
      html: {
        files: ['src/index.html'],
        tasks: ['replace:dev']
      }
    },
    uglify: {
      target: {
        files: {
          'dist/scripts/main.min.js': 'src/scripts/main.js'
        }
      }
    },
    htmlmin: {
      dist: {
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'prebuild/index.html': 'src/index.html',
        }
      }
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_CSS',
              replacement: './styles/main.min.css'
            },
            {
              match: 'ENDERECO_JS',
              replacement: './scripts/main.min.js'
            },
          ]
        },
        files: [
          {
            expand: true, flatten: true, src: ['prebuild/index.html'], dest: 'dist/'
          }
        ]
      },
      dev: {
        options: {
          patterns: [
            {
              match: 'ENDERECO_CSS',
              replacement: './styles/main.css'
            },
            {
              match: 'ENDERECO_JS',
              replacement: '../src/scripts/main.js'
            }
          ]
        },
        files: [
          {
            expand: true, flatten: true, src: ['src/index.html'], dest: 'dev/'
          }
        ]
      },

    },

    clean: ['prebuild']


  });

  //CARREGA PLUGUIN
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  //CHAMA TAREFA
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['less', 'uglify', 'htmlmin', 'replace', 'clean']);

};