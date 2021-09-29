/*
 *  Thanks mwinter1
 *   https://forum.squarespace.com/topic/62813-display-random-image-on-page/ -->
 * 
 */
function random_imglink(){
    var myimages=new Array()
    //specify random images below. You can have as many as you wish
    myimages[1]="assets/img/image1.png"
    myimages[2]="assets/img/image2.png"
    myimages[3]="assets/img/image3.png"
    myimages[4]="assets/img/image4.png"
    myimages[5]="assets/img/image5.png"

    var ry=Math.floor(Math.random()*myimages.length)
    if (ry==0)
        ry=1
        document.write('<img id=leftImg src="'+myimages[ry]+'" class="image">')
}

random_imglink()
