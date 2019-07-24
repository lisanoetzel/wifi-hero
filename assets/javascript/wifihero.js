$(document).ready(function () {
  //ON-CLICK EVENT FOR SEARCH BUTTON//
  $("#search-button").click(function () {

    event.preventDefault();

    var userInput = $("#search-input").val();

    //WIGLE API FULL CALL BEGINS//
    $.ajax({
      url: "https://api.wigle.net/api/v2/network/search?onlymine=false&first=0&freenet=true&paynet=false&postalCode=30339&resultsPerPage=10",
      method: "GET",
      crossDomain: true,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent("AID3aa44685dab3e53850838bf8aeecdf50" + ':' + "efa4e947d0df628c21d6ddcd62c58ab1"))))
      }
    })
      .then(function (response) {
        console.log("signalStrength", response);
        if (response.results) {
          for (var i = 0; i < response.results.length; i++) {
            //For Loop grabs the QOS/signal stregth and appends to each row//
            let signalStrength = response.results[i].qos;

            $('#row' + (i + 1) + '>.signalStrength')[0].append(signalStrength);

          }
        } else {
          //console.log below that will show results based off of success within api results from Wigle if enabled
          //console.log("successful", response.success)
          console.log("message:", response.message)
        }
        //WIGLE API FULL CALL ENDS//

    

        // //MAPQUEST API FULL CALL BEGINS//
        $.ajax({
          url: "https://www.mapquestapi.com/search/v2/radius?origin=" + userInput + ",+&raGAdius=0.15&maxMatches=10&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|581208&outFormat=json&key=05kGEvPvXnmEAEYmQ1LFJQOng6f3ECA4",
          method: "GET"
        })

          .then(function (response) {
            console.log("name", response);
            console.log("address", response);
            if (response.searchResults) {
              for (var i = 0; i < response.searchResults.length; i++) {
                //For Loop grabs the Name and Address and appends to each row//
                let name = response.searchResults[i].name;
                let address = response.searchResults[i].fields.address;
                $('#row' + (i + 1) + '>.name')[0].append(name);
                $('#row' + (i + 1) + '>.address')[0].append(address);
                //console.log($($('#row' + (i + 1) + '>.address')[0]));
                // put name and address on screen
                // use jquery to grab any child witht he class of name that has a parent of
                // $('#row'+(i+1)+'>.name')
                // console.log('are any of us real?')
                // console.log('my name is name is name', $('#row'+ (i+1) + '>.name')[0]);
              }
            } else {
              //console.log below that will show results based off of success within api results from Mapquest if enabled
              //console.log("successful", response.success)
              console.log("message:", response.message)
            }
        //MAPQUEST API FULL CALL ENDS//
          })


          //ONCE CALLS ARE COMPLETED AND RESULTS PRINT TO PAGE, CLEAR THE SEARCH BAR FOR THE NEXT SEARCH//
          .done(function (response) {
            //console.log(response.searchResults);
            //console.log(response.searchResults[0].name);
            //  console.log('blahbitty blah')
            // for each of 10 responses
            $("#search-input").empty();

          });
      });
  });
 });






