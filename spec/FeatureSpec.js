'use strict'

describe("Feature Spec", function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it("adds the frame score to the game score", function(){
    frame.roll(9)
    game.add(frame.score)
    expect(game.score).toEqual(9)
  });

  
});
