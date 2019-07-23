//var jQueryScript = document.createElement("script");  
//jQueryScript.setAttribute('src',"https://code.jquery.com/jquery-3.4.1.min.js");
// document.head.appendChild(jQueryScript);


var queryUrl = "https://api.wigle.net/api/v2/network/search/profile/AID3aa44685dab3e53850838bf8aeecdf50&api_key=efa4e947d0df628c21d6ddcd62c58ab1";
jQuery.ajax({
    url: queryUrl, 
    method: "GET"
  })

  .done(function(response){
    console.log(response);
  });

  
  
  
  //  for (var i = 0; i < results.length; i++) {
    //    if (results[i]. results[i].locationData === signal ) {
      //      var signalDiv = $("<div>");
        //    var p = $("<p>").text("signal" + signal);
          //   signalDiv.append(p);



