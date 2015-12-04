$(function() {
	var head = [],
			i = 0,
			stations = [];
			
	$.each($("#stations thead th"), function() {
			head[i++] = $(this).text();
	});

	$.each($("#stations tbody tr"), function() {
			var $row = $(this),
					rowObj = {};

			i = 0;
			$.each($("td", $row), function() {
					var $col = $(this);
					rowObj[head[i]] = $col.text();
					i++;
			})

			stations.push(rowObj);
	});
	
	var stationsFirstPatch = [];
	var stationsSecondPatch = [];
	var stationsThirdPatch = [];
	var stationsFourthPatch = [];
	
	var direction = Math.floor(Math.random() * 360);
	var speed = 0;
	var time = "";
	for(var i = 0 ; i < stations.length ; i++) {
		var WOArray = [];
		for(var j = 0 ; j < 1344 ; j++) {
			direction += Math.floor(Math.random() * 61) - 30;
			if(direction > 359) direction -= 359;
			if(direction < 0) direction += 359;
			
			speed = Math.max(0, gaussianRandom(3, 4));
			speed = Math.round(speed * 10) / 10;
			
			var mins = j % 4 * 15;
			var hours = Math.floor(j / 4) % 24;
			var day = Math.floor(j / 96) % 7;
			var week = Math.floor(j / 672) % 2;
			
			time =(hours >= 10 ? hours : "0" + hours) + "-" + (mins != 0 ? mins : "00") + "-" + day + "-" + week;
			
			WOArray.push({direction: direction, speed: speed, time: time});
		}
		stations[i].observations = WOArray;
	}
	/*
	for(var i = 0 ; i < 100 ; i++) stationsFirstPatch.push(stations[i]);
	console.log(JSON.stringify(stationsFirstPatch));
	*/
	/*
	for(var i = 100 ; i < 200 ; i++) stationsSecondPatch.push(stations[i]);
	console.log(JSON.stringify(stationsSecondPatch));
	*/
	/*
	for(var i = 200 ; i < 300 ; i++) stationsThirdPatch.push(stations[i]);
	console.log(JSON.stringify(stationsThirdPatch));
	*/
	/*
	for(var i = 300 ; i < stations.length ; i++) stationsFourthPatch.push(stations[i]);
	console.log(JSON.stringify(stationsFourthPatch));
	*/	
	
	
	for(var i = 0 ; i < 336 ; i++) if(i % 10 == 0) stationsFirstPatch.push(stations[i]);
	console.log(JSON.stringify(stationsFirstPatch));
	// mongoimport --db facewind --collection stations --drop --jsonArray --file jsondata.json
});


// Create gaussian random
function gaussianRandom(mean, std) {
  if (mean === undefined || std === undefined) {
    throw "Gaussian random needs 2 arguments (mean, standard deviation)";
  }
  return randByBoxMullerTransform() * std + mean;
}

var randByBoxMullerTransform = (function() {
  var vals = [];

  function calc() {
    var alpha = Math.random(),
        beta = Math.random();
    return [
      Math.sqrt(-2 * Math.log(alpha)) * Math.sin(2 * Math.PI * beta),
      Math.sqrt(-2 * Math.log(alpha)) * Math.cos(2 * Math.PI * beta)
    ];
  }

  return function() {
    vals = vals.length == 0 ? calc() : vals;
    return vals.pop();
  }
})();