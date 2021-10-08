// Create a "close" button and append it to each list item

//Load To Do list from localstorage
var ii = 0;
function loadTD() {
  for(ii=0; ii< parseInt(localStorage.getItem("max")); ii++){
    var li = document.createElement("li");
    var inputValue = localStorage.getItem(ii);
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.id = ii;
    li.className = "tditem";
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        
        for(var j=div.id;j<ii;j++){
          localStorage.setItem(j,localStorage.getItem(parseInt(j)+parseInt(1)));
        }
        ii--;
        localStorage.setItem("max",ii);
      }
    }
  }
}

/*
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}*/

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    /*
    localStorage.removeItem(div.id);
    ii--;
    localStorage.setItem("max",ii);
    for(j=div.id;j<ii;j++){
      localStorage.setItem(j,localStorage.getItem(j+1));
    }*/
  }
}

/*
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.id = ii;
  li.className = "tditem";
  if (inputValue === '') {
    //alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    
    localStorage.setItem(ii,inputValue);
    ii++;
    localStorage.setItem("max",ii);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      
      for(var j=div.id;j<ii;j++){
        localStorage.setItem(j,localStorage.getItem(parseInt(j)+parseInt(1)));
      }
      
      //localStorage.removeItem(div.id);
      ii--;
      localStorage.setItem("max",ii);
      
      //localStorage.removeItem(div.id+1);
      
    }
  }
}

if(localStorage.getItem("max") == 0){
  localStorage.clear();
}

