function fullScreen(){
	var canvas = document.getElementById("painel");

	if(canvas.webkitRequestFullScreen){
		canvas.webkitRequestFullScreen();
	} else{
		canvas.mozRequestFullScreen();
	}
}