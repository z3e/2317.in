var second = minute = hour = tag = day = month = 1
				
function zeit() {
  document.getElementById('m'+month).style.color = 'black';
  document.getElementById('d'+day).style.color = 'black';
  document.getElementById('t'+tag).style.color = 'black';
  document.getElementById('h'+hour).style.color = 'black';
  document.getElementById(minute+'m').style.color = 'black';
  document.getElementById(second+'s').style.color = 'black';

  var thetime=new Date();
  month = thetime.getMonth();
  day = thetime.getDay();
  tag = thetime.getDate();
  hour = thetime.getHours();
  minute = thetime.getMinutes();
  second = thetime.getSeconds();

  document.title = hour+''+minute;

  document.getElementById('d'+day).style.color = 'red';
  document.getElementById('t'+tag).style.color = 'red';
  document.getElementById('m'+month).style.color = 'red';
  document.getElementById('h'+hour).style.color = 'red';
  document.getElementById(minute+'m').style.color = 'red';
  document.getElementById(second+'s').style.color = 'red';
}

function filltext() {
  var viewportwidth, viewportheight;
   
  if (typeof window.innerWidth != 'undefined') {
  //  viewportwidth = window.innerWidth;
    viewportheight = window.innerHeight;
  }
  else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth != 'undefined' 
        && document.documentElement.clientWidth != 0) {
    //viewportwidth = document.documentElement.clientWidth;
    viewportheight = document.documentElement.clientHeight;
  }
  else {
    //viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
    viewportheight = document.getElementsByTagName('body')[0].clientHeight;
  }

  var container, containerHeight;
  i=43;
  do {
      i--;
    document.getElementById("textcontainer").style.fontSize = i+"px";
    container = document.getElementById("jtextfill");
    containerHeight = container.offsetHeight;
    //containerWidth = container.offsetWidth;
  } while (viewportheight < containerHeight);
}

function OnResizeDocument () {
  filltext();
}

setInterval("zeit()", 1000);
filltext();
window.onresize = OnResizeDocument;
