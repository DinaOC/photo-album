$(document).ready(function() {
            $('.second-page').hide();
            $('.nav-bar').hide();
            var firstPageTmpl = _.template($('#second-template').html());
            $('.first-page').html(firstPageTmpl(albums));


                $('.first-page').on('click', 'img', function(event) {
                event.preventDefault();
                var selectedItem = $(this).attr('rel');
                var onPage = albums[selectedItem];
                var albumStr = "";
                onPage.photos.forEach(function(el) {
                  var templateStr =_.template($('#first-template').html());
                  albumStr += templateStr(el);
                  var photoStr ="";
                    var tmplStr2 =_.template($('#second-template').html());
                  photoStr += tmplStr2 (el)

                  })


                $('.second-page').html(albumStr);
                $('.second-page').show();
                $('.first-page').hide();
            });


            $('.second-page').on('click', 'img', function(event) {
                event.preventDefault();
                var selectedImg = $(this).attr('src');
                var photoUrl = selectedImg.replace('-thumb.jpg','.jpeg');
                var imageStr = "<img class= 'big' src='" + photoUrl +"' />";

                $('.second-page').html(imageStr);
            })



  });

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
