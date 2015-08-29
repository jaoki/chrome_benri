var KEY_CODE_J = 74;
var KEY_CODE_K = 75;

var i = 0;
function moveToNextBoke(){
	i++;
	document.querySelectorAll(".boke")[i].scrollIntoView();
}
function moveToPreviousBoke(){
	i--;
	document.querySelectorAll(".boke")[i].scrollIntoView();
}
document.addEventListener('keydown', function(event) {
    if(event.keyCode == KEY_CODE_J) {
		moveToNextBoke();
    }
    else if(event.keyCode == KEY_CODE_K) {
		moveToPreviousBoke();
    }
});

