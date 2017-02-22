var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&user_id=24662369@N07&api_key=a5e95177da353f58113fd60296e1d250&format=json&nojsoncallback=1",
  "method": "GET",
  "headers": {}
}

$.ajax(settings).done(function (data) {
 

$("#galleryTitle").append(data.photos.photo[0].title + " Gallery");
$.each( data.photos.photo, function( i, gp ) {

var farmId = gp.farm;
var serverId = gp.server;
var id = gp.id;
var secret = gp.secret;


$("ul.imageGallery").append('<li>' + '<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>' + '</li>');

});
});