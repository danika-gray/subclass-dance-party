var makeRickAstleyDancer = function(top, left, timeBetweenSteps) {

  makeArtistDancer.apply(this, arguments);
  this.$node = $('<img src ="/dancerImg/rickRollDancer.png" class="rickRollDancer"></img>');
  this.setPosition(top, left);

};

makeRickAstleyDancer.prototype = Object.create(makeArtistDancer.prototype);
makeRickAstleyDancer.prototype.constructor = makeRickAstleyDancer;


makeRickAstleyDancer.prototype.step = function() {

  this.$node.animate({
    top: "+=200px",
    left: "+=200px",
  }, 1000 );

  makeArtistDancer.prototype.step.apply(this, arguments);

  this.$node.animate({
    top: "-=200px",
    left: "-=200px",
  }, 1000 );

};