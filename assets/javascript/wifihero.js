var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src',"https://code.jquery.com/jquery-3.4.1.min.js");
document.head.appendChild(jQueryScript);


// I CHANGED THIS
$.ajax({
    url: "http://www.mapquestapi.com/search/v2/search?key=05kGEvPvXnmEAEYmQ1LFJQOng6f3ECA4&maxMatches=10&shapePoints=40.099998,-76.305603&hostedData=mqap.ntpois|group_sic_code=?|799972&remoteData=1,point,40.099998,-76.305603&remoteData=2,linestring,40.099998,-76.305603,40.199998,-76.305603,40.199998,-76.405603",
    method: "GET"
});


$("button").on("click", function() {

var allTogether = queryUrl1 + mixDataSearch + staticMap + icons; 

var results = [];
//Wigle Api (Line 5)
$.ajax({
    url: "https://api.wigle.net/api/v2/network/detail/netid/operator/lac/cid/type/system/network/basestation/profile/AID3aa44685dab3e53850838bf8aeecdf50:efa4e947d0df628c21d6ddcd62c58ab1",
    method: "GET"
  });
console.log(response);


//Static map api (Line 9)
  $.ajax({
      url:"https://www.mapquestapi.com/staticmap/v5/map?key=05kGEvPvXnmEAEYmQ1LFJQOng6f3ECA4&center=Atlanta,GA&size=600,400@2x",
      method:"GET" 
  });
//Icons Api (Line 11)
  $.ajax({
      url: "https://assets.mapquestapi.com/icon/v2/marker-7B0099@2x.png",
      method:"GET"
  })







  

  .then(function(response) {
    var results = response.wifiNetworkWithLocation.locationData.signal;

    for (var i = 0; i < results.length; i++) {
        if (results[i]. results[i].locationData === signal ) {
            var signalDiv = $("<div>");
            var p = $("<p>").text("signal" + signal);
             signalDiv.append(p);


        }
    
    

    }
    




});



