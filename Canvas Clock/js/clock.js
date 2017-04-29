	var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var myMusic = document.getElementById("myAudio");
    var minutes;
	
    ctx.strokeStyle = '#99FF00';
    ctx.lineWidth = 17;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#99FF00';


function degToRad(degree){
	var factor = Math.PI / 180;
	return degree*factor;
}

function playMusic(){
    if( minutes <= 1 ){
    	new Audio(myMusic.src).play();
    }
}

function renderTime(){
	
	var now = new Date();
	var today = now.toDateString();
	var time = now.toLocaleTimeString();
	var hours = now.getHours();
	minutes = now.getMinutes();
	var sec = now.getSeconds();
	var milliseconds = now.getMilliseconds();
	var newSec = sec + (milliseconds / 1000);
	
	// backgrond
	ctx.fillRect(0,0,500,500);
	ctx.fillStyle = 'BLACK';
	
	
	// hours

    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*15) - 90));
    ctx.stroke();
	
	// minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6) - 90));
    ctx.stroke();
	
	//sec
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad((newSec*6) - 90));
    ctx.stroke();
    
	//date
    ctx.font = '25px Arial Bold';
    ctx.fillText(today, 175, 250);
    
    //time
    ctx.font = '25px Arial';
    ctx.fillText(time, 175, 200);
}

setInterval(renderTime, 40);
setInterval(playMusic, 20000);


