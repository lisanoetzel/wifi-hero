
//$("button").on("click", function(){
  //  var search = $(this).attr("#locName");

   // var queryUrl = "https://www.mapquestapi.com/search/v2/radius?origin=Atlanta,+CO&radius=0.15&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=05kGEvPvXnmEAEYmQ1LFJQOng6f3ECA4";
    //$.ajax({
      //  url: queryUrl,
        //method: "GET"
    //})

    $.ajax({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=atlanta,+&raGAdius=0.15&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=05kGEvPvXnmEAEYmQ1LFJQOng6f3ECA4",
        method: "GET"
    })
    .done(function(response){
        console.log(response);
    });
    //.then(function(response){
       // var results = response.data;


           //for (var i = 0; i < results.length; i++) {

            //if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              //var gifDiv = $("<div>");

              //var rating = results[i].rating;

             /// var p = $("<p>").text("Rating: " + rating);

              //var personImage = $("<img>");

              //personImage.attr("src", results[i].images.fixed_height.url);

              //gifDiv.append(p);
              //gifDiv.append(personImage);

              //$("#gifs-appear-here").prepend(gifDiv);
            //}
          //}
        //})
    //})




//$("button").on("click", function() {

//var allTogether = queryUrl1 + mixDataSearch + staticMap + icons; 

//var results = [];
//Wigle Api (Line 5)
//$.ajax({
   // url: "https://api.wigle.net/api/v2/profile/AID3aa44685dab3e53850838bf8aeecdf50:efa4e947d0df628c21d6ddcd62c58ab1",
    //method: "GET"
  //})








  

  //.then(function(response) {
    //var results = response.wifiNetworkWithLocation.locationData.signal;

    //for (var i = 0; i < results.length; i++) {
       // if (results[i]. results[i].locationData === signal ) {
           // var signalDiv = $("<div>");
           // var p = $("<p>").text("signal" + signal);
            // signalDiv.append(p);


       // }
    
    

    //}
    




//}



