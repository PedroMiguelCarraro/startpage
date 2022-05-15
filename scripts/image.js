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
    myimages[8]="assets/img/image8.png"
    myimages[9]="assets/img/image9.png"
    myimages[10]="assets/img/image10.png"
    myimages[11]="assets/img/image11.png"
    myimages[12]="assets/img/image12.png"
    myimages[13]="assets/img/image13.png"
    myimages[14]="assets/img/image14.png"
    myimages[15]="assets/img/image15.png"
    myimages[16]="assets/img/image16.png"
    myimages[17]="assets/img/image17.png"
    myimages[18]="assets/img/image18.png"
    myimages[19]="assets/img/image19.png"
    myimages[20]="assets/img/image20.png"
    myimages[21]="assets/img/image21.png"
    myimages[22]="assets/img/image22.png"

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
