$(document).ready(function(){
var mTopics = ["Kermit","Miss Piggy","Gonzo","Fozzie Bear","Animal","Flyod Pepper","Scooter","Rowlf the Dog","Beaker","Bunsen Honeydew","Sam Eagle","The Swedish Chef","Dr. Teeth","Stalter and Waldorf","Camilla the Chicken","Bobo the Bear","Bean Bunny","Rizzo the Rat"];

for(var i = 0; i < mTopics.length; i++) {
    var topButton = $("<button>");
    topButton.addClass("jbutton");
    topButton.attr("value",mTopics[i]);
    topButton.html( mTopics[i]);
    $("#putTopics").append(topButton);
}

$("#sendMuppet").on('click',function() {
    var nButton = $("<button>");
    var getVfrombox = $('#getMuppet').val();
    nButton.addClass("jbutton");
    nButton.attr("value",getVfrombox);
    nButton.html(getVfrombox);
    $('#putTopics').append(nButton);
});

$(document).on("click",".jbutton",function(){

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).val()  + "AND Muppets" +
"&api_key=CcXigouHSYxnSCDQSR1zhiEjhmkgATsb&limit=10"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var results = response.data;
    console.log(results);

    for(var i = 0 ; i<results.length ; i++){
        var rating = results[i].rating;
        var jDiv = $("<div class='jgif'>");
        var p = $('<p>').text("Rating: " + rating);
        var muppetImg = $("<img>");
        
        muppetImg.attr("src",results[i].images.fixed_height_still.url);
        muppetImg.attr("still",results[i].images.fixed_height_still.url);
        muppetImg.attr("animate",results[i].images.fixed_height.url);
        muppetImg.attr("data-state","still");
        jDiv.append(p);
        jDiv.append(muppetImg);
        $("#putGIFS").prepend(jDiv);
      
        }
    })
});

$(document).on("click",".jgif",function(){

  var getImg = $(this).find('img');  
  var state = $(this).find('img').attr("data-state");
 
  if(state === "still") {
    getImg.attr("src",getImg.attr("animate"));
    getImg.attr("data-state","animate");
  } else {
      getImg.attr("src",getImg.attr("still"));
      getImg.attr("data-state","still");
  }
});
});