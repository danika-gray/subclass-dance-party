// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {
var makeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>'); // does this show up on the DOM?

  // this.$node = $('<img src="moonDancer.png" class="dancer"></img>');

  this.timeBetweenSteps = timeBetweenSteps;


  this.step();
  this.setPosition(top, left);

};

makeDancer.prototype.step = function() {
  var callBlinkyDancer = this;

  setTimeout(function() {
    callBlinkyDancer.step();
  }, this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

