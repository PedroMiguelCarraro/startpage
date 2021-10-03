/*
 *  Thanks mwinter1
 *   https://forum.squarespace.com/topic/62813-display-random-image-on-page/
 * 
 *  Thanks victorvde
 *   https://github.com/victorvde/jpeg2png
 * 
 */

//add here imgs
var myimages=new Array()
    //specify random images below. You can have as many as you wish
    myimages[1]="assets/img/image1.png"
    myimages[2]="assets/img/image2.png"
    myimages[3]="assets/img/image3.png"
    myimages[4]="assets/img/image4.png"
    myimages[5]="assets/img/image5.png"
    myimages[6]="assets/img/image6.png"
    myimages[7]="assets/img/image7.png"

//first random
function random_imglink(){
    
    var ry=Math.floor(Math.random()*myimages.length)
    if (ry==0)
        ry=1
        document.write('<img id=leftImg src="'+myimages[ry]+'" class="image">')
}

//rand every time
function time_imag(){
    var nodo = document.getElementById("leftImg");
    var ry=Math.floor(Math.random()*myimages.length)
    if (ry==0)
        ry=1
    nodo.src = myimages[ry];
}

//time change here , now 5min = 300000
setInterval(time_imag, 300000);
random_imglink()
