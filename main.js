var counter = 0;
var counterps = 0;

function increaseCounterSpeed(number){
	counterps += number;
	document.getElementById("counterps").innerHTML = counterps;
}

window.setInterval(function(){
	counter += counterps/10;
	counter = Math.floor(counter*10)/10;
	if(counter < 1000){
		document.getElementById("counter").innerHTML = Math.floor(counter);
	}
	if(counter > 1000 && counter < 1000000){
		document.getElementById("counter").innerHTML = Math.floor(counter/100)/10 + "K";
	}
	if(counter > 1000000 && counter < 10000000){
		document.getElementById("counter").innerHTML = Math.floor(counter/10000)/100 + "M";
	}
	if(counter > 10000000 && counter < 100000000){
		document.getElementById("counter").innerHTML = Math.floor(counter/100000)/10 + "M";
	}
	if(counter > 100000000 && counter < 1000000000){
		document.getElementById("counter").innerHTML = Math.floor(counter/1000000)/1 + "M";
	}	
},100)

window.setInterval(function(){
	if(counterps === 1){
		counter += counterps;
		document.getElementById("counter").innerHTML = Math.floor(counter);
	}
},1000)
