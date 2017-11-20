function myfunc() {
 var x= document.createElement("ABBR");
 var t=document.createTextNode("WHO");
 x.setAttribute("title","World Health Organization");
 x.appendChild(t);
 document.getElementById('pId').appendChild(x);
}