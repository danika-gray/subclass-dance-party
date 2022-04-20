var makeArtistDancer = function(top, left, timeBetweenSteps) {

  makeDancer.apply(this, arguments);
  // this.$node = $('<span class="dancer"></span>'); // does this show up on the DOM?
  // this.timeBetweenSteps = timeBetweenSteps * 2;

  // this.step();
  // this.setPosition(top, left);
};

makeArtistDancer.prototype = Object.create(makeDancer.prototype);
makeArtistDancer.prototype.constructor = makeArtistDancer;

//makeArtistDancer.prototype.step = function() {
// timeBetweenSteps = this.timeBetweenSteps;

// var callaDancer = this;

// setTimeout(function() {
//   callaDancer.changeColor();
// }, 5000);

// };

// makeArtistDancer.prototype.setPosition = function(top, left) {

// var styleSettings = {
//   top: top,
//   left: left
// };
// this.$node.css(styleSettings);

// };



// Changing colors!

// Moving around the page!

// Growing or shrinking in size!

// Other shapes besides circles!

// Rotation!
