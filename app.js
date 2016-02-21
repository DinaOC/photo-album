$(document).ready(function(){

$('.second-page').hide();
$('nav-bar').hide();

$('first-page').on('click','img', function(event) {
  event.preventDefault();
  var selectedItem = $(this).attr('rel');
  $(selectedItem).siblings().hide();
  $(selectedItem).show();
})

var photoStr ="";
albums.forEach(function(element){

 photoStr +=  "<li>"
+ "<img src='"
+ element.album1.albumUrl
+ "' />"
+"</li>"
//+ "<h4>"
//+ element.album1.albumTitle
//+ "</h4>"
+ "<li>"
+ "<img src='"
+ element.album2.albumUrl
+ "' />"
+"</li>"
//+ "<h4>"
//+ element.album2.albumTitle
//+ "</h4>"
+"<li>"
+ "<img src='"
+ element.album3.albumUrl
+ "' />"
+"</li>"
//+ "<h4>"
//+ element.album3.albumTitle
//+ "</h4>"
+"<li>"
+"<img src='"
+ element.album4.albumUrl
+ "' />"
+"</li>"
//+ "<h4>"
//+ element.album4.albumTitle
+ "</h4>"
+"<li>"
+ "<img src='"
+ element.album5.albumUrl
+ "' />"
+"</li>"
//+ "<h4>"
//+ element.album5.albumTitle
//+ "</h4>"
+"<li>"
+ "<img src='"
+ element.album6.albumUrl
+ "' />"
+"</li>"
//+ "<h4>"
//+ element.album6.albumTitle
//+ "</h4>"


})
console.log(photoStr);
$(".first-page").append(photoStr);

var inAlbumOne = "";
albums.forEach(function(el){

inAlbumOne += "<li>"
+ "<img src='"
+ el.pic_one_al1.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_two_al1.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_three_al1.photoThumbUrl + "' />"
+ "</li>"


})

console.log(inAlbumOne);
$(".second-page").append(inAlbumOne);


})
