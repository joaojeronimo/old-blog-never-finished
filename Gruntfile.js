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
    less: {
      index: {
        src: "src/less/index.less",
        dest: "style.css"
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
      },
      less: {
        files: ["src/less/*",
                "src/less/**"],
        tasks: ["less"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['browserify', 'jade', 'less']);

};
