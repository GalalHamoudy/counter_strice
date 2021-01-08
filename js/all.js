/*=====================================The hour====================================== */
function tol(){
    "use strict";
var now = new Date(),
    h = now.getHours(),m = now.getMinutes(),s = now.getSeconds();
    if(h<10){ h = "0" + h }
    if(m<10){m = "0" + m }
    if(s<10){s = "0" + s };
document.getElementById("time").textContent = h + " : " + m + " : " + s ;
};
window.onload = function () { setInterval(tol , 500);}
/*=======================================the loading===================================== */
$(window).ready(function () {
    "use strict";
    $(".show-wow .loader").fadeIn(2000, function () { 
        $(this).parent().fadeOut(2000, function () {
            $("body").css("overflow", "auto");
            $(this).remove();
        });
    });
        $("html").niceScroll({cursorcolor:"#313940",cursorwidth:"14px",background:"#00000045"}); 
});
/*======================================================================================== */
/*=======================================the loading===================================== */
// $(document).ready(function () {
//     var mgpost = document.getElementById("mgpost") ;
    // $(mgpost).on('click',function(){
    //     console.log("clicked on mgpost");
    // });
    // $(mgpost).on('mouseenter',function(){
    //     console.log("mouseenter on mgpost");
    // });
    // $(mgpost).on('dblclick',function(){
    //     console.log("dblclick on mgpost");
    // });
    // $(mgpost).on('contextmenu',function(){
    //     console.log("contextmenu on mgpost");
    // });


    // $(mgpost).on('mousedown',function(){
    //     console.log("mousedown on mgpost");
    // });
    // $(mgpost).on('mouseleave',function(){
    //     console.log("mouseleave on mgpost");
    // });
    // $(mgpost).on('mousemove',function(){
    //     console.log("mousemove on mgpost");
    // });
    // $(mgpost).on('mouseout',function(){
    //     console.log("mouseout on mgpost");
    // });

    // $(mgpost).on('mouseup',function(){
    //     console.log("mouseup on mgpost");
    // });


// });
/*======================================================================================== */


$(document).ready(function() {
    var mgpost = document.getElementById("mgpost") ;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    
    $(mgpost).on('mouseenter',function(){
        audioElement.play();
        $("#status").text("Status: Playing");
    });
    
    $(mgpost).on('dblclick',function(){
        audioElement.pause();
        $("#status").text("Status: Paused");
    });
    
    // $('#restart').click(function() {
    //     audioElement.currentTime = 0;
    // });
});








// window.onload = function() {
//     var context = new AudioContext();
//   }





// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
// if (!isChrome){
//     $('#iframeAudio').remove()
// }
// else {
//     $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
// }





















































// $(document).ready(function() {
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
    
//     audioElement.addEventListener('ended', function() {
//         this.play();
//     }, false);
    
//     audioElement.addEventListener("canplay",function(){
//         $("#length").text("Duration:" + audioElement.duration + " seconds");
//         $("#source").text("Source:" + audioElement.src);
//         $("#status").text("Status: Ready to play").css("color","green");
//     });
    
//     audioElement.addEventListener("timeupdate",function(){
//         $("#currentTime").text("Current second:" + audioElement.currentTime);
//     });
    
//     $('#play').click(function() {
//         audioElement.play();
//         $("#status").text("Status: Playing");
//     });
    
//     $('#pause').click(function() {
//         audioElement.pause();
//         $("#status").text("Status: Paused");
//     });
    
//     $('#restart').click(function() {
//         audioElement.currentTime = 0;
//     });
// });