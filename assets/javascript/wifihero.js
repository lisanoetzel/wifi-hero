$(document).ready(function(){
  $("#search-button").click(function() {

    event.preventDefault();

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

        $("#search-input").empty();
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
        };
            
    })
  });

    
});

    