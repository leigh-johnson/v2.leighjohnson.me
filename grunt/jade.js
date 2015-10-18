module.exports = {
  compile: {
    options: {
      data: {
        debug: false
      }
    },
    files: {
      "dist/index.html": ["templates/index.jade"]
    }
  }
};