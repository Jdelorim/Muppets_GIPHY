$(document).ready(function(){




var mTopics = ["Kermit","Miss Piggy","Gonzo","Fozzie Bear","Animal","Flyod Pepper","Scooter","Rowlf the Dog","Beaker","Bunsen Honeydew","Sam Eagle","The Swedish Chef","Dr. Teeth","Stalter and Waldorf","Camilla the Chicken","Bobo the Bear","Bean Bunny","Rizzo the Rat"];




for(var i = 0; i < mTopics.length; i++) {
    var topButton = $("<button>");
    topButton.addClass("jbutton");
    topButton.attr("value",mTopics[i]);
    topButton.html( mTopics[i]);
    $("#putTopics").append(topButton);
    
}


$("#sendMuppet").on('click',function(){
    var nButton = $("<button>");
    var getVfrombox = $('#getMuppet').val();
    nButton.addClass("jbutton");
    nButton.attr("value",getVfrombox);
    mButton.html(getVfrombox);
    $('#putTopics').append(mButton);
   

});


$(".jbutton").on('click',function(){



var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).val()  + "AND muppets" +
"&api_key=CcXigouHSYxnSCDQSR1zhiEjhmkgATsb&limit=10"

//CcXigouHSYxnSCDQSR1zhiEjhmkgATsb
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
        muppetImg.attr("src",results[i].images.fixed_height.url);
        jDiv.append(p);
        jDiv.append(muppetImg);
        $("#putGIFS").prepend(jDiv);

    }


})
   
});







});