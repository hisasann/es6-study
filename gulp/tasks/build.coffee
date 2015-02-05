gulp = require 'gulp'
$ = require('gulp-load-plugins')()
runSequence = require 'run-sequence'

gulp.task 'global-local',->
  global.isWatching = true

gulp.task 'local', ->
  runSequence 'global-local', 'browserify'
