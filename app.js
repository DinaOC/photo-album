$(document).ready(function(){

$('.second-page').hide();
$('.nav-bar').hide();

$('.first-page').on('click','img', function(event) {
  event.preventDefault();
  var selectedItem = $(this).attr('rel');
  var albumToPutOnPage =albums [0][selectedItem];
  $(selectedItem).siblings().hide();
  $(albumToPutOnPage).show();
})

var photoStr ="";
albums.forEach(function(element){

 photoStr +=  "<li>"
+ "<img src='"
+ element.album1.albumUrl
+ "'  rel = 'album1' />"
+"</li>"
//+ "<h4>"
//+ element.album1.albumTitle
//+ "</h4>"
+ "<li>"
+ "<img src='"
+ element.album2.albumUrl
+ "' rel = 'album2' />"
+"</li>"
//+ "<h4>"
//+ element.album2.albumTitle
//+ "</h4>"
+"<li>"
+ "<img src='"
+ element.album3.albumUrl
+ "' rel = 'album3' />"
+"</li>"
//+ "<h4>"
//+ element.album3.albumTitle
//+ "</h4>"
+"<li>"
+"<img src='"
+ element.album4.albumUrl
+ "' rel = 'album4' />"
+"</li>"
//+ "<h4>"
//+ element.album4.albumTitle
+ "</h4>"
+"<li>"
+ "<img src='"
+ element.album5.albumUrl
+ "' rel = 'album5' />"
+"</li>"
//+ "<h4>"
//+ element.album5.albumTitle
//+ "</h4>"
+"<li>"
+ "<img src='"
+ element.album6.albumUrl
+ "' rel = 'album6' />"
+"</li>"
//+ "<h4>"
//+ element.album6.albumTitle
//+ "</h4>"


})
console.log(photoStr);
$(".first-page").append(photoStr);

// THIS IS ALBUM ONE
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
//THIS IS ALBUM TWO

var inAlbumTwo = "";
albums.forEach(function(el){

inAlbumTwo += "<li>"
+ "<img src='"
+ el.pic_one_al2.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_two_al2.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_three_al2.photoThumbUrl + "' />"
+ "</li>"


})

console.log(inAlbumTwo);
$(".second-page").append(inAlbumTwo);

// THIS IS ALBUM THREE

var inAlbumThree = "";
albums.forEach(function(el){

inAlbumThree += "<li>"
+ "<img src='"
+ el.pic_one_al3.photoThumbUrl + "' rel = 'album3' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_two_al3.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_three_al3.photoThumbUrl + "' />"
+ "</li>"


})

console.log(inAlbumThree);
$(".second-page").append(inAlbumThree);

//THIS IS ALBUM FOUR

var inAlbumFour = "";
albums.forEach(function(el){

inAlbumFour += "<li>"
+ "<img src='"
+ el.pic_one_al4.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_two_al4.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_three_al4.photoThumbUrl + "' />"
+ "</li>"


})

console.log(inAlbumFour);
$(".second-page").append(inAlbumFour);

// THIS IS ALBUM FIVE

var inAlbumFive = "";
albums.forEach(function(el){

inAlbumFive += "<li>"
+ "<img src='"
+ el.pic_one_al5.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_two_al5.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_three_al5.photoThumbUrl + "' />"
+ "</li>"


})

console.log(inAlbumFive);
$(".second-page").append(inAlbumFive);


// THIS IS ALBUM SIX

var inAlbumSix = "";
albums.forEach(function(el){

inAlbumSix += "<li>"
+ "<img src='"
+ el.pic_one_al6.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_two_al6.photoThumbUrl + "' />"
+ "</li>"
+ "<li>"
+ "<img src='"
+ el.pic_three_al6.photoThumbUrl + "' />"
+ "</li>"


})

console.log(inAlbumSix);
$(".second-page").append(inAlbumSix);

// THESE ARE SIDE BUTTONS

var albumBtn = "";
albums.forEach(function(elButn){

  albumBtn += "<button>"+ elButn.navButtonOne + "</button"
  +"<button>"+ elButn.navButtonTwo + "</button"
  +"<button>"+ elButn.navButtonThree + "</button"
  +"<button>"+ elButn.navButtonFour + "</button"
  +"<button>"+ elButn.navButtonFive + "</button"
  +"<button>"+ elButn.navButtonSix + "</button"

  console.log(albumBtn);
  $(".nav-bar").append(albumBtn);


})


})
