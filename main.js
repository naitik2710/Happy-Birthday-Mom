var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
    a=Img;
    a.scaleToWidth(700);
    a.scaleToHeight(510);
    a.set({
       top:0,
       left:0
    });
    canvas.add(a);
    });
	
}

function playSound(){
	x.play();
}
