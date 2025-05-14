function displayitinerary(response) {
  console.log(response.data.answer);
  new Typewriter(".itinerary", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
  });
}

function getItinerary(event) {
  event.preventDefault();
  let key = "a2t704ade1b003d643fa9333o6bb8862";
  let place = document.querySelector("#destination-input").value;
  let prompt = `plan a 1-day itinerary for ${place}`;
  let context = `You are an AI specialising in giving travel adivce and making travel plans. please provide an itinerary with activities, timings and locations, do not care about the date and weather.display the tile in <h3 id="itinerary-title"></h3> and display the itinerary in <ul id="itinerary-list"></ul> with each activity in a separate <li> tag and separarte each line with <br> display the time and plpace in <strong></strong> separate each <li> with <br>. write <strong>Have a nice day in ${place}</strong> at the end of the itinerary.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  let itineraryElement = document.querySelector(".itinerary");
  itineraryElement.innerHTML = `<div class="bounce">Your itinerary for ${place} is on its way...</div>`;

  itineraryElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayitinerary);
}

let itineraryFormElement = document.querySelector("#destination-form");
itineraryFormElement.addEventListener("submit", getItinerary);
