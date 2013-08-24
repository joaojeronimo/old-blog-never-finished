module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      index: {
        src: "src/js/index.js",
        dest: "bundle.js"
      }
    },
    jade: {
      index: {
        src: "src/jade/index.jade",
        dest: "index.html"
      }
    },
    watch: {
      js: {
        files: ["src/js/*",
                "src/js/**/*"],
        tasks: ["browserify"]
      },
      jade: {
        files: ["src/jade/*",
                "src/jade/**/*"],
        tasks: ["jade"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify', 'jade']);

};
