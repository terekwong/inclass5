// ADD NEW ITEM TO END OF LIST
var node = document.createElement('li');
var textnode = document.createTextNode("cream");
node.appendChild(textnode);
document.querySelector('ul').appendChild(node);

// ADD NEW ITEM START OF LIST
var newItem = document.createElement('li');
var textnode = document.createTextNode("kale");
newItem.appendChild(textnode);

var list = document.querySelector('ul');
list.insertBefore(newItem, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var x = document.getElementsByTagName('li');
for (var y = 0; y < x.length; y++){
    x[y].setAttribute("class","cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var h = document.getElementsByTagName('h2');
h[0].innerHTML += "<span>" + x.length + "</span>";