/*Demonstrated mastery of 2 AJAX requests*/ 

/*data file*/
$(document).ready(function(){
    $.getJSON("about.json", function(info){
        $.each(info, function() {
            $.each(this, function(key, value) {
                $("#info").append( 
                    "Info: " + value.info + "<br>" 
                );
            });
        }); 
    });
});

/*API*/
var url =
"https://dog.ceo/api/breeds/image/random";
$.getJSON(url, function(data){
    var html = "";
    $.each(data, function(){
    html = "<img src=" + data.message+ ">";
    $("#a").html(html);
    });
    
    console.log(data.message)
   });