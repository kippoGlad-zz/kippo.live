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

const spellingPlace = document.querySelector("#programming");
var txt = ["JavaScript...", "Ruby on Rails...", "Node.js...", "MongoDB...", "React.js...", "Electron...", "and other modern languages..."];
var temporaryText = "";
var j = -1;
var i = 0;

async function spelling() {
  j++;
  if ( j == 6 ) {
    j = 0;
  }
  await sleep(250);
  for (i = 0 ; i < txt[j].length; i++ ) {
    temporaryText += txt[j].charAt(i);
    spellingPlace.innerHTML = temporaryText;
    await sleep(150);
  }
  await sleep(700);
  deleteLetters();
}

async function deleteLetters() {
  for ( i = 0; i < txt[j].length; i++) {
    temporaryText = temporaryText.slice(0, -1); 
    spellingPlace.innerHTML = temporaryText;
    await sleep(75);
  }
  spelling();
}
spelling();

function basicPopup(url) {
  popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    }