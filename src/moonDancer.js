var makeMoonDancer = function(top, left, timeBetweenSteps) {

  makeArtistDancer.apply(this, arguments);
  //
  this.$node = $('<img src ="/dancerImg/moonDancer.png" class="moonDancer"></img>'); // put image here?
  this.setPosition(top, left);

};

makeMoonDancer.prototype = Object.create(makeArtistDancer.prototype);
makeMoonDancer.prototype.constructor = makeMoonDancer;


makeMoonDancer.prototype.step = function() {

  this.$node.animate({
    left: "+=300px",
  }, 1000 );

  makeArtistDancer.prototype.step.apply(this, arguments);

  this.$node.animate({
    left: "-=300px",
  }, 1000 );

};