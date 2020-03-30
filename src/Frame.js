function Frame() {
  this.score = 0
}

Frame.prototype.roll = function(n) {
  this.score += n
};
