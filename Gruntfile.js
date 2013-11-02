/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    qunit: {
      files: ['test/**/*.html']
    },
    connect: {
      server: {
        options: {
		hostname: "*",
		port: 9001,
		keepalive: true,
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['qunit']);

};
