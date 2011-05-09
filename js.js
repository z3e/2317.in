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

function fillText() {
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
  i=220;
  do {
      i--;
    container = document.getElementById("uhr");
    container.style.fontSize = i+"px";
    containerheight = container.offsetHeight;
    //containerWidth = container.offsetWidth;
  } while (viewportheight < containerheight);
  //alert(i);
}

function OnResizeDocument () {
  fillText();
}

function highlight(id) {
 var e = document.getElementById(id);
 e.style.backgroundColor = (e.style.backgroundColor=="rgb(212, 212, 212)")?'':'#D4D4D4';
}

function toggle_visibility(id) {
 var e = document.getElementById(id);
  e.style.display = (e.style.display==''||e.style.display=='block')?'none':'block';
  setTimeout("fillText()", 1000);;
}

setInterval("zeit()", 1000);
fillText();
window.onresize = OnResizeDocument;
