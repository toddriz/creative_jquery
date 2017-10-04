const apiKey = "dcAHh31rc5SYqqFQZOH2O1H3zRjl7tv3hP2Nxwp5";
// api url example https://api.nasa.gov/planetary/apod?api_key=dcAHh31rc5SYqqFQZOH2O1H3zRjl7tv3hP2Nxwp5
$(document).ready(function () {
    let date = new Date("2017-10-03");
    date = new Date().toISOString().slice(0,10);
    const url = `https://api.nasa.gov/planetary/apod?hd=true&api_key=${apiKey}`
    $.getJSON(url, function (data) {
        $("#nasa-image").attr("src", data.hdurl);
    }).done(function () { console.log('getJSON request succeeded!'); })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log('getJSON request failed! ' + textStatus);
            console.log("incoming " + jqXHR.responseText);
        })
        .always(function () {
            console.log('getJSON request ended!');
        });
});