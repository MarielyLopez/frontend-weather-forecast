// Javascript Code.
//The functionality of page
    $('#search').click(function(){


var codeCountrie="";

var mode_temp = $("input[name=temperature]:checked").val();
        country = $("input[name=country]").val();
        state = $("input[name=state]").val();
        country = country.toLowerCase();

        if (country.length !=0 && state.length !=0){
          $.ajax({
          url : "countries.json",
          dataType : "json",
          success : function(parsedJsonCodeCountries) {
            for (var i=0; i <= 242; i++) {
           	    if (parsedJsonCodeCountries[i]["name"].toLowerCase() === country) {
                    codeCountrie= parsedJsonCodeCountries[i]["code"]
                };
                //console.log(codeCountrie);
            };

              $.ajax({
              url : "http://api.wunderground.com/api/2ff1936f14e0db95/geolookup/conditions/q/"+codeCountrie+"/"+state+".json",
              dataType : "jsonp",
              success : function(parsed_json) {
                var error = parsed_json["response"]["error"]
                //console.log(error);
                    //console.log(parse2);
                    console.log(state);
                var mode_temp = $("input[name=Fahrenheit]:checked").val();
                if (mode_temp ==="Fahrenheit"){
                    var location = parsed_json['current_observation']['temp_f'];
                    console.log(parsed_json['current_observation'])
                    $('.location').append("<p > "+ location +"°F"+"</p>");
                }else {
                    var location = parsed_json['current_observation']['temp_c'];
                    $('.location').append("<p class =\"country\">"+ location +"°c"+"</p>");
                };

                var visibility = parsed_json['current_observation']['visibility_km']
                $('.location').append("<p > Visibility "+visibility+"    Km</p>");

                var humidity= parsed_json['current_observation']['relative_humidity']
                $('.relative_humidity').append("<p> Humidity"+humidity+"</p>");

                var wind = parsed_json['current_observation']['wind_kph']
                $('.wind_string').append( "<p> Wind "+wind+"   KM/h</p>");
/*
                  $('.TempBig').append("<p class=\"weather senst\">"+weather+"</p>"+"<p class=\"dewpoint senst\">"+dewpoint+"</p>"+"<p class=\"senst\">Feeling Climate</p>");
                  $('.icon').append("<img src= \""+ icon +"\" alt =\"Image of weather\">");
                  $('.location').append("<p class =\"country\">"+ hcountrie +"</p>"+"<h1 class=\"city\">"+hcity+"</h1>"+"<h1 class=\"state\">"+hstate+"</h1>");
                  $('.update').append("<p>"+update+"</p>");
                  
                  
                  
                } else {
                    console.log("Has been double click on search");
                };
*/


            }
          });

            }
    		});
		};
});

/*
<footer class="row">
    <div class="col-xs-12">
        <div class="observation_time update down"></div>
        <div class="newSearch cursor down" style="display:scroll;bottom:40px;right:10px;" onclick ="subir()" onclick="stopScroll()" title="New Search" id="reset">New Search</div>
    </div>
</footer>
*/
