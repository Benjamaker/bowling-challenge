function Game() {
  this.player;
  this.score = 0;
  this.frameNumber = 0;
}


Game.prototype.add = function(num) {
  this.score += num
}

Game.prototype.enterName = function(name) {
  this.player = name
}
