module.exports = function(grunt) {
  grunt.config.set('stylus', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/style/',
        src: '**/*.stylus',
        dest: '.tmp/public/style/',
        ext: '.css'
      }]
    }
  })
  grunt.loadNpmTasks('grunt-contrib-stylus')
}