'use strict'

describe("Game", function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = jasmine.createSpyObj("frame", ["rollFirst", "rollSecond"])
  });

  it("has a score of zero by default", function(){
    expect(game.score).toEqual(0)
  });

  it("knows the player's name", function(){
    game.enterName("Ben")
    expect(game.player).toEqual("Ben")
  });
});
