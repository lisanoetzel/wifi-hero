
//$("button").on("click", function(){
  //  var search = $(this).attr("#locName");

   

    //$("button1").on("click", function() {
      //var userInput = $(this).attr("list-group");
      $.ajax({
          url: "https://www.mapquestapi.com/search/v2/radius?origin=atlanta,+&raGAdius=0.15&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=05kGEvPvXnmEAEYmQ1LFJQOng6f3ECA4",
          method: "GET"
      })
      .done(function(response){
           console.log(response.searchResults);
           console.log(response.searchResults[0].name);
          //  console.log('blahbitty blah')
          // for each of 10 responses
          for (var i = 0; i < response.searchResults.length; i++){
            // grab name and address
            let name = response.searchResults[i].name;
            let address = response.searchResults[i].fields.address;
            $('#row'+ (i+1) + '>.name')[0].append(name + address);
            $('#row1>.name')

            // put name and address on screen
            // use jquery to grab any child witht he class of name that has a parent of
            // $('#row'+(i+1)+'>.name')
            // console.log('are any of us real?')
            // console.log('my name is name is name', $('#row'+ (i+1) + '>.name')[0]);
          }
              // if (results1[i])
            // .then(function(response){
          // var results = response.data;
      })
      // });
    //});
  
  

  //var results1 = response.searchResults.fields.name;
          
          //for (var i = 0; i < results1.length; i++){
            //if (results1[i])
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
