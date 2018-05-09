module.exports = function(grunt){

    grunt.initConfig({
        concat: {
          js: {
            src: ['js/gallery.js', 'js/html5shiv-printshiv.js', 'js/jquery.easing.1.3.js',
             'js/jquery.elastislide.js', 'js/jquery.tmpl.min.js'],
            dest: 'build/js/concat/scripts.js',
          },
          css: {
            src: ['css/demo.css','css/elastislide.css','css/reset.css','css/style.css'],
            dest: 'build/css/concat/styles.css',
          },
        },
        uglify: {
          options: {
            mangle: false
          },
          my_target: {
            files: [{
             
              src: 'build/js/concat/scripts.js',
              dest: 'js/scripts.min.js',

            }]
          },
        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'build/css/concat',
              src: ['*.css', '!*.min.css'],
              dest: 'css',
              ext: '.min.css'
            }]
          },
        },
        watch: {
          js: {
            files: ['js/**/*.js'],
            tasks: ['concat','uglify'],
          },
          css: {
            files: ['css/**/*.css'],
            tasks: ['concat','cssmin'],
          },

      },
        

      });
      grunt.loadNpmTasks('grunt-contrib-concat');//concat JS & Css
      grunt.loadNpmTasks('grunt-contrib-cssmin');//minify Css
      grunt.loadNpmTasks('grunt-contrib-uglify');//minify JS
      grunt.loadNpmTasks('grunt-contrib-watch');//watch for changes on all files
      grunt.registerTask('default', ['concat','uglify','cssmin', 'watch']);//run all as default
      // grunt.registerTask('default', ['concat','watch']);
      
};

