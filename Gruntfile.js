module.exports = function(grunt) {

  require('jit-grunt')(grunt);          // https://jonsuh.com/blog/take-grunt-to-the-next-level/
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dev: {
        options: {
          sassDir: 'assets/scss',
          cssDir: 'assets/css',
          environment: 'development',
          outputStyle: 'expanded',
          require: 'breakpoint',
          noLineComments: false,
          watch: true
        }
      },
      dist: {
        options: {
          sassDir: 'assets/scss',
          cssDir: 'assets/css',
          environment: 'production',
          outputStyle: 'compressed',
          require: 'breakpoint',
          noLineComments: true,
          watch: false
        }
      }
    },

    watch: {
      options: {
        livereload: true
      }
    },

    concurrent: {
      target: {
        tasks: [
          'compass:dev',
        ],
        options: {
          logConcurrentOutput: true,
          livereload: true
        }
      }
    }

  });


  grunt.registerTask('prod', [
    'compass:production'
  ]);

  grunt.registerTask('default', [
    'concurrent:target'
  ]);
}
