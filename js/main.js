var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function soon() {
    for ( var i = 0; i < 1000; i++ ) {
        for ( var j = 1; j < 8; j++ ) {
            document.querySelector('#letter' + j).style.color = "black";
            await sleep(100);
            document.querySelector('#letter' + j).style.color = "rgb(243, 244, 249)";
        }
    }
}
soon();

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image);