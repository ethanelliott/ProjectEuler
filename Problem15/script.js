var Timer = function () {
	this.startObject = null;
	this.stopObject = null;
	this.start = function() {
		this.stopObject = null;
		this.startObject = Date.now();
	};
	this.stop = function() {
		this.stopObject = Date.now();
	};
	this.reset = function() {
		this.startObject = null;
		this.stopObject = null;
	};
	this.get = function() {
		if (this.stopObject === null) {
			var tempTime = Date.now();
			return (tempTime - this.startObject)/1000;
		} else {
			return (this.stopObject - this.startObject)/1000;
		}
	};
};


var paths;
function moves(x, y, p) {
	if (x < p && y < p) {
		paths++;
		moves(x + 1, y, p);
		moves(x, y + 1, p);
	}
}


function latticePaths(x) {
	paths = 1;
	var exTimer = new Timer();
	exTimer.reset();
	exTimer.start();
	moves(0,0,x);
	exTimer.stop();
	return [exTimer.get(), paths];
}

console.log(latticePaths(20));
