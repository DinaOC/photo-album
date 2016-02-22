$(document).ready(function(){

$('.second-page').hide();
$('.nav-bar').hide();

$('.first-page').on('click','img', function(event) {
  event.preventDefault();
  var selectedItem = $(this).attr('rel');
  var onPage = albums[selectedItem];
  var albumStr ="";
  onPage.photos.forEach(function(el) {
    albumStr +=  "<li>"
             + "<img src='"
             + el.photoThumbUrl
             + "'  rel = '" + el.photoName + "' />"
             +"</li>"
  })
  $('.first-page').html(albumStr);
})



})

var photoStr ="";


 photoStr +=  "<li>"
+ "<img src='"
+ albums.album1.albumUrl
+ "'  rel = 'album1' />"
+"</li>"
+ "<li>"
+ "<img src='"
+ albums.album2.albumUrl
+ "' rel = 'album2' />"
+"</li>"
+"<li>"
+ "<img src='"
+ albums.album3.albumUrl
+ "' rel = 'album3' />"
+"</li>"
+"<li>"
+"<img src='"
+ albums.album4.albumUrl
+ "' rel = 'album4' />"
+"</li>"
+ "</h4>"
+"<li>"
+ "<img src='"
+ albums.album5.albumUrl
+ "' rel = 'album5' />"
+"</li>"
+"<li>"
+ "<img src='"
+ albums.album6.albumUrl
+ "' rel = 'album6' />"
+"</li>"

$(".first-page").append(photoStr);


//thingWeClickedOn.attr('src').replace('-thumb.jpg','.jpeg')


// THESE ARE SIDE BUTTONS

/*var albumBtn = "";
albums.forEach(function(elButn){

  albumBtn += "<button>"+ elButn.navButtonOne + "</button"
  +"<button>"+ elButn.navButtonTwo + "</button"
  +"<button>"+ elButn.navButtonThree + "</button"
  +"<button>"+ elButn.navButtonFour + "</button"
  +"<button>"+ elButn.navButtonFive + "</button"
  +"<button>"+ elButn.navButtonSix + "</button"

  $(".nav-bar").append(albumBtn);


})*/


// THIS IS ALBUM ONE
// var inAlbumOne = "";
// albums.forEach(function(el){
//
// inAlbumOne += "<li>"
// + "<img src='"
// + el.pic_one_al1.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_two_al1.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_three_al1.photoThumbUrl + "' />"
// + "</li>"
//
//
// })
//
// console.log(inAlbumOne);
// $(".second-page").append(inAlbumOne);
// //THIS IS ALBUM TWO
//
// var inAlbumTwo = "";
// albums.forEach(function(el){
//
// inAlbumTwo += "<li>"
// + "<img src='"
// + el.pic_one_al2.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_two_al2.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_three_al2.photoThumbUrl + "' />"
// + "</li>"
//
//
// })
//
// $(".second-page").append(inAlbumTwo);
//
// // THIS IS ALBUM THREE
//
// var inAlbumThree = "";
// albums.forEach(function(el){
//
// inAlbumThree += "<li>"
// + "<img src='"
// + el.pic_one_al3.photoThumbUrl + "' rel = 'album3' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_two_al3.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_three_al3.photoThumbUrl + "' />"
// + "</li>"
//
//
// })
//
// $(".second-page").append(inAlbumThree);
//
// //THIS IS ALBUM FOUR
//
// var inAlbumFour = "";
// albums.forEach(function(el){
//
// inAlbumFour += "<li>"
// + "<img src='"
// + el.pic_one_al4.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_two_al4.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_three_al4.photoThumbUrl + "' />"
// + "</li>"
//
//
// })
//
// $(".second-page").append(inAlbumFour);
//
// // THIS IS ALBUM FIVE
//
// var inAlbumFive = "";
// albums.forEach(function(el){
//
// inAlbumFive += "<li>"
// + "<img src='"
// + el.pic_one_al5.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_two_al5.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_three_al5.photoThumbUrl + "' />"
// + "</li>"
//
//
// })
//
// $(".second-page").append(inAlbumFive);
//
//
// // THIS IS ALBUM SIX
//
// var inAlbumSix = "";
// albums.forEach(function(el){
//
// inAlbumSix += "<li>"
// + "<img src='"
// + el.pic_one_al6.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_two_al6.photoThumbUrl + "' />"
// + "</li>"
// + "<li>"
// + "<img src='"
// + el.pic_three_al6.photoThumbUrl + "' />"
// + "</li>"
//
//
// });
// $(".second-page").append(inAlbumSix);
