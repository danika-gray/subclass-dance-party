var BlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

};

BlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.step();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //blinkyDancer.$node.toggle();

  //   var time = 4000;
  //   while (time > 0) {
  //     console.log('it works');

  //     setTimeout(function() {
  //       this.$node.toggle();
  //       time -= 1000;
  //     }, 1000); // add a this.timeBetweenSteps
  //     // this.$node.toggle();
  //   }
  // };

  // setTimeout(function() {
  //   callBlinkyDancer.step();
  // }, this.timeBetweenSteps);


  makeDancer.prototype.step.apply(this, arguments);
  this.$node.toggle();

};

