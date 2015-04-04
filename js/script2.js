var myImages = [
//specify random images below. You can have as many as you wish
"./img/gifs/jimmy_1.gif",
// "./img/gifs/jimmy_2.gif",
"./img/gifs/jimmy_3.gif",
"./img/gifs/jimmy_4.gif",
"./img/gifs/jimmy_5.gif",
"./img/gifs/jimmy_6.gif",
"./img/gifs/jimmy_7.gif",
"./img/gifs/jimmy_8.gif",
// "./img/gifs/jimmy_9.gif",
"./img/gifs/jimmy_10.gif",
// "./img/gifs/jimmy_11.gif",
"./img/gifs/jimmy_12.gif",
// "./img/gifs/jimmy_13.gif",
"./img/gifs/jimmy_14.gif",
"./img/gifs/jimmy_15.gif",
"./img/gifs/jimmy_16.gif",
"./img/gifs/jimmy_17.gif",
"./img/gifs/jimmy_18.gif",
// "./img/gifs/jimmy_19.gif",
"./img/gifs/jimmy_20.gif",
// "./img/gifs/jimmy_21.gif",
"./img/gifs/jimmy_22.gif",
"./img/gifs/jimmy_23.gif",
"./img/gifs/jimmy_24.gif",
"./img/gifs/jimmy_25.gif"
];

$(document).ready(function(){
	$("#formButton").click(function(){
		var value = $("#formValue").val();
		console.log(value);


		var imagePath = myImages[Math.floor(Math.random()*myImages.length)];
		console.log(imagePath);

		var imgStr = '<img class="gif" src="'+ imagePath + '">';


		$('#gifs').html($(imgStr));

	

	});
});

$(document).ready(function(){
  $("#who-link").click(function(){
    $("#who").slideToggle("slow");
    // $("#why").slideDown();
    // $("#what").slideUp();
    // $("#where").slideUp();
    // $("#where").css("display","none");
    // $("#what").css("display","none");

  });

  $("#what-link").click(function(){
    $("#what").slideToggle("slow");
    // $("#what").slideDown();
    // $("#why").slideUp();
    // $("#where").slideUp();
    // $("#where").css("display","none");
    // $("#why").css("display","none");
  });

  $("#why-link").click(function(){
    $("#why").slideToggle("slow");
    // $("#where").slideDown();
    // $("#what").slideUp();
    // $("#why").slideUp();
    // $("#why").css("display","none");
    // $("#what").css("display","none");
  });

});


// function random_imglink(){
// var ry=Math.floor(Math.random()*myImages.length)
// if (ry==0)
// ry=1
// document.write('<img src="'+myImages[ry]+'" border=0>')

// random_imglink()

// onclick generate random number and the random number will be linked ot a gif
// jqueyr change img  src source on click
// create array (from previous) 