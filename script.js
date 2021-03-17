var i;
$("#search1").keypress(function(event){
if(event.keyCode==13)
{
    add();
}
});

function add() 
{
var li = document.createElement("li");
var inputValue = document.getElementById("search1").value;
var t = document.createTextNode(inputValue);
//   li.appendChild(t);
if (inputValue === '')
{
alert("You must write something to add to the list!");
}
else 
{
// document.getElementById("list").appendChild(li);

document.getElementById("search1").value = "";
li.id="l1";

var check = document.createElement("input");
var t2 = document.createTextNode(inputValue);
console.log(t2);
check.type = "checkbox";
check.className="checkbox";
check.style.margin="0px -80px 0px 250px";
li.appendChild(t2);
li.appendChild(check);
document.getElementById("list").appendChild(li);

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.style.margin="-20px 0px 0px 400px";
span.style.float="left";
span.appendChild(txt);
li.appendChild(span);

var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++)
{
close[i].onclick = function() 
{
  var div = this.parentElement;
div.style.display = "none";
}
}
}
}

$("ul").on("click", "li", function(){
$(this).toggleClass("lineThrough");
});

var myNode= document.getElementsByTagName("LI");
for (i = 0; i < myNode.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNode[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
}
}