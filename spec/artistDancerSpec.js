// change for artistDancer

describe('artistDancer', function() {

  var artistDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    artistDancer = new makeArtistDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(artistDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(artistDancer.$node, 'toggle');
    artistDancer.step();
    expect(artistDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {

      sinon.spy(artistDancer, 'step');
      expect(artistDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(artistDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(artistDancer.step.callCount).to.be.equal(2);
    });
  });
});
