
// Grafiek voedselvoorraad

window.onload = function() {

var food = new CanvasJS.Chart("foodReserves", {
	animationEnabled: true,
	theme: "dark2",
	axisY: {
		title: "Kilograms (kg)",

	},
	data: [{
		type: "column",
		showInLegend: false,
		dataPoints: [
			{ y: 440, label: "Hamburgers" },
			{ y: 976, label: "Rice" },
			{ y: 807, label: "Potatoes" },
			{ y: 300, label: "Mars bars" },
			{ y: 530, label: "Tomatoes" },
		]
	}]
});
food.render();

// Einede grafiek voedselvoorraad

// Grafiek drankvoorraad


var drink = new CanvasJS.Chart("drinkReserves", {
	animationEnabled: true,
	theme: "dark2",
	axisY: {
		title: "Liters (L)",

	},
	data: [{
		type: "column",
		showInLegend: false,
		dataPoints: [
			{ y: 300, label: "Coca Cola" },
			{ y: 923, label: "Water" },
			{ y: 290, label: "Gin" },
			{ y: 843, label: "Tonic" },
			{ y: 657, label: "Orange juice" },
		]
	}]
});
drink.render();


// Einde grafiek drankvoorraad

// Grafiek snelheid

var speed = new CanvasJS.Chart("speed", {
	animationEnabled: true,
  theme: "dark2",
	axisY:{
		includeZero: false,
    title: "(c)",
	},
	data: [{
		type: "line",
		indexLabelFontSize: 30,
		dataPoints: [
			{ y: 0.312 , indexLabel: "Lowest",markerColor: "DarkSlateGrey", markerType: "cross", indexLabelFontSize: "15" },
			{ y: 0.313 },
			{ y: 0.316 },
			{ y: 0.320 },
			{ y: 0.326 },
			{ y: 0.333 },
			{ y: 0.341 },
			{ y: 0.360 , indexLabel: "Highest",markerColor: "red", markerType: "triangle", indexLabelFontSize: "15" },
			{ y: 0.359 },
			{ y: 0.358 },
			{ y: 0.358 },
			{ y: 0.359 }
		]
	}]
});
speed.render();


// Einde grafiek snelheid


// Grafiek afstanden

var distance = new CanvasJS.Chart("distances", {
	animationEnabled: true,
  theme: "dark2",

	data: [{
		type: "doughnut",
		startAngle: 60,
		indexLabelFontSize: 30,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 125109248, label: "To Mars", indexLabelFontSize: "15" },
			{ y: 100738237, label: "From Earth", indexLabelFontSize: "15" },

		]
	}]
});
distance.render();


// Einde grafiek afstanden

// Grafiek motortemperatuur

var thrusterTemp = new CanvasJS.Chart("thrusterTemp", {
  theme: "dark2",
	axisY: {
		title: "Temperature (°C)",
		suffix: " °C"
	},
	data: [{
		type: "column",
		yValueFormatString: "#,### °C",
		indexLabel: "{y}",
		dataPoints: [
			{ label: "1", y: 206 },
			{ label: "2", y: 163 },
			{ label: "3", y: 154 },
			{ label: "4", y: 176 },
			{ label: "5", y: 184 },
			{ label: "6", y: 122 }
		]
	}]
});

// Functie om de grafiek automatisch te laten updaten en een kleur te geven wanneer de temperatuur boven een bepaalde waarde komt

function updateChart() {
	var boilerColor, deltaY, yVal;
	var dps = thrusterTemp.options.data[0].dataPoints;
	for (var i = 0; i < dps.length; i++) {
		deltaY = Math.round(2 + Math.random() *(-2-2));
		yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
		boilerColor = yVal > 200 ? "#FF2500" : yVal >= 170 ? "#FF6000" : yVal < 170 ? "#6B8E23 " : null;
		dps[i] = {label: "T "+(i+1) , y: yVal, color: boilerColor};
	}
	thrusterTemp.options.data[0].dataPoints = dps;
	thrusterTemp.render();
};
updateChart();

setInterval(function() {updateChart()}, 500);



// Einde grafiek motortemperatuur

// Grafiek botsingen met kometen

var asteroidCollisions = new CanvasJS.Chart("asteroidCollisions", {
	theme: "dark2",
	animationEnabled: true,
	zoomEnabled: true,
	data: [{
		type: "area",
		dataPoints: []
	}]
});

addDataPoints(365);
asteroidCollisions.render();


// functie om de waarden van de grafiek te bepalen

function addDataPoints(noOfDps) {
	var xVal = asteroidCollisions.options.data[0].dataPoints.length + 1, yVal = 100;
	for(var i = 0; i < noOfDps; i++) {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		asteroidCollisions.options.data[0].dataPoints.push({x: xVal,y: yVal});
		xVal++;
	}
}



// Einde grafiek botsingen met kometen

}


