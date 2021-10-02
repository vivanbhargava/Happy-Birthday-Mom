var canvas = new fabric.Canvas('myCanvas');
var X= document.getElementById("myAudio");
function new_image() {
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        hb_image = Img;
        hb_image.scaleToWidth(1000);
        hb_image.scaleToHeight(845);
        hb_image.set({
            top: 0,
            left: 0
        })
        canvas.add(hb_image);
    })
}
function playSound(){
    X.play();
}
