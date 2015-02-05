module.exports = {
  browserify: [
    {
      input      : ['./source/main.js']
      output     : 'bundle.js'
      extensions : ['.js']
      destination: './build/'
    }
  ]
}

