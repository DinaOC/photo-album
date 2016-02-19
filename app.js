$(document).ready(function(){

var photoStr ="";
albums.forEach(function(element){

 photoStr += "<li>" + "<img src='"
 + element.album1.albumUrl
+ "' /> + "</li>"
+ "<h4>"
+ element.album1.albumTitle
+ "</h4>"
+"<img src='"
+ element.album2.albumUrl
+ "' />"
+ "<h4>"
+ element.album2.albumTitle
+ "</h4>"
+"<img src='"
+ element.album3.albumUrl
+ "' />"
+ "<h4>"
+ element.album3.albumTitle
+ "</h4>"
+"<img src='"
+ element.album4.albumUrl
+ "' />"
+ "<h4>"
+ element.album4.albumTitle
+ "</h4>"
+"<img src='"
+ element.album5.albumUrl
+ "' />"
+ "<h4>"
+ element.album5.albumTitle
+ "</h4>"
+"<img src='"
+ element.album6.albumUrl
+ "' />"
+ "<h4>"
+ element.album6.albumTitle
+ "</h4>"


})
console.log(photoStr);
$(".first-page").append(photoStr);





})
