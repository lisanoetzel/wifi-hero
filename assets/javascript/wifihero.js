//var jQueryScript = document.createElement("script");  
//jQueryScript.setAttribute('src',"https://code.jquery.com/jquery-3.4.1.min.js");
// document.head.appendChild(jQueryScript);
$(document).ready(function(){
  $("#search-button").click(function() {

    event.preventDefault();

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
      var userInput = $("#search-input").val();
    
      $.ajax({
        url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userInput + ",+&raGAdius=0.15&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=05kGEvPvXnmEAEYmQ1LFJQOng6f3ECA4",
        method: "GET"
    })
    .done(function(response){
         //console.log(response.searchResults);
         //console.log(response.searchResults[0].name);
        //  console.log('blahbitty blah')
        // for each of 10 responses
        for (var i = 0; i < response.searchResults.length; i++){
          // grab name and address
          let name = response.searchResults[i].name;
          let address = response.searchResults[i].fields.address;
          $('#row'+ (i+1) + '>.name')[0].append(name + address);
          $('#row'+ (i+1) + '>.address')[0].append(address);
          console.log($($('#row'+ (i+1) + '>.address')[0]));
          // put name and address on screen
          // use jquery to grab any child witht he class of name that has a parent of
          // $('#row'+(i+1)+'>.name')
          // console.log('are any of us real?')
          // console.log('my name is name is name', $('#row'+ (i+1) + '>.name')[0]);
        }
            
    })

  });

        $.ajax({
            url: "https://api.wigle.net/api/v2/network/search?onlymine=false&first=0&freenet=true&paynet=false&postalCode=30339&resultsPerPage=10",
            method: "GET",
            crossDomain: true,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent("AIDdee33fecc5f3132fb31b3ea300594139" + ':' + "06a213475b72b47f4b9752d36caec370"))))
            }
        })
            .then(function (response) {
                console.log(response);
                console.log(response.Runtime);
            });
    
});


    