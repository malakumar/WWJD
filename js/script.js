/*JavaScript here*/

function myFunction(){
	document.getElementById("main")object.style.backgroundImage="url(img/bg.jpg)";

	}



function random_imglink(){
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="../img/jimmy1.gif"
myimages[2]="../img/jimmy2.gif"
myimages[3]="..img/jimmy3.gif"
myimages[4]="../img/jimmy4.gif"
myimages[5]="../img/jimmy5.gif"
myimages[6]="../img/jimmy6.gif"
myimages[7]="../img/jimmy7.gif"
myimages[8]="../img/jimmy8.gif"
myimages[9]="../img/jimmy9.gif"
myimages[10]="../img/jimmy10.gif"
myimages[11]="../img/jimmy11.gif"
myimages[12]="../img/jimmy12.gif"
myimages[13]="../img/jimmy13.gif"
myimages[14]="../img/jimmy14.gif"
myimages[15]="../img/jimmy15.gif"
myimages[16]="../img/jimmy16.gif"
myimages[17]="../img/jimmy17.gif"
myimages[18]="../img/jimmy18.gif"
myimages[19]="../img/jimmy19.gif"
myimages[20]="../img/jimmy20.gif"
myimages[21]="../img/jimmy21.gif"
myimages[22]="../img/jimmy22.gif"
myimages[23]="../img/jimmy23.gif"
myimages[24]="../img/jimmy24.gif"
myimages[25]="../img/jimmy24.gif"


var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.write('<img src="'+myimages[ry]+'" border=0>')
}
random_imglink()
