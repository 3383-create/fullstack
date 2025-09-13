const cityCoords = {
  bangalore: { lat: 12.97, lon: 77.59 },
  delhi: { lat: 28.61, lon: 77.20 },
  mumbai: { lat: 19.07, lon: 72.87 },
  london: { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};

$("#fetchBtn").click(() => {
  const city = $("#cityInput").val().trim().toLowerCase();

  if (!city) {
    $("#weather").text("Please enter a city.");
    return;
  }

  if (!cityCoords[city]) {
    $("#weather").text("City not in list!");
    return;
  }

  const { lat, lon } = cityCoords[city];
  $("#weather").text("Loading...");
  $("#fetchBtn").prop("disabled", true);

  $.getJSON(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    .done(data => {
      const w = data.current_weather;
      if (!w) {
        $("#weather").text("No data available.");
        return;
      }
      const cityName = city.charAt(0).toUpperCase() + city.slice(1);
      $("#weather").html(`
        <h3>Weather in ${cityName}</h3>
        <p>Temp: ${w.temperature}°C</p>
        <p>Wind: ${w.windspeed} km/h</p>
        <p>Time: ${w.time}</p>
      `);
    })
    .fail(() => {
      $("#weather").text("Error fetching weather.");
    })
    .always(() => {
      $("#fetchBtn").prop("disabled", false);
    });
});
