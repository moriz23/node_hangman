function Letter(let) {
  this.charac = let;
  this.appear = false;

  this.letterRender = function() {
    if (this.appear === false) {
      return "__";
    } else (this.appear === true) {
      return this.charac;
    }
  }
};

module.exports = Letter;
