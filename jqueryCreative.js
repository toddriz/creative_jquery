const apiKey = "dcAHh31rc5SYqqFQZOH2O1H3zRjl7tv3hP2Nxwp5";
// api url example https://api.nasa.gov/planetary/apod?api_key=dcAHh31rc5SYqqFQZOH2O1H3zRjl7tv3hP2Nxwp5
$(document).ready(function () {

    let nasa_url = "https://api.nasa.gov/planetary/apod?hd=true&api_key=" + apiKey;
	let userInput = "";
	let recipes = [];

    $.getJSON(nasa_url, function (data) {
        $("#picTitle").text(data.title);
        $("#picDescription").text(data.explanation);
        $("#nasa-image").css('background-image', 'url(' + data.hdurl + ')');
    });


	$("#foodButton").click( (e) => {
		let food_url = "https://api.edamam.com/search?q=" + $("#food").val() + "&app_id=dd148576&app_key=4809208db76ce80ead19002f527a10ff";

		$.getJSON(food_url, (data) =>{
			recipes = data["hits"];
			recipe = recipes[0]["recipe"];
			$("#foodPic").attr("src", recipe["image"]);
			$("#foodName").text(recipe["label"]);
			$("#foodLink").attr("href", recipe["url"]);
            $("#clickHint").text("Click the picture above to view the full recipie!");
		});
	});
});
