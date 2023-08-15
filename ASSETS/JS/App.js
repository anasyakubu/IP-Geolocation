const searchInput = document.querySelector('#searchInput');

searchInput.addEventListener('mouseout', function (event) {
  event.preventDefault();
  searchInput.value
  const apiUrl = `http://ip-api.com/json/${searchInput}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const ipInfoDiv = document.getElementById("ip-info");

      const html = `
              <p>Status: ${data.status}</p>
              <p>Country: ${data.country}</p>
              <p>Region: ${data.regionName}</p>
              <p>City: ${data.city}</p>
              <p>Zip: ${data.zip}</p>
              <p>Latitude: ${data.lat}</p>
              <p>Longitude: ${data.lon}</p>
              <p>Timezone: ${data.timezone}</p>
              <p>ISP: ${data.isp}</p>
              <p>Organization: ${data.org}</p>
              <p>AS: ${data.as}</p>
          `;

      ipInfoDiv.innerHTML = html;
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });

  // const latitude = parseFloat(document.getElementById('latitude').value);
  // const longitude = parseFloat(document.getElementById('longitude').value);
  // const map = L.map('map').setView([latitude, longitude], 15);

  // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  // }).addTo(map);

  // L.marker([latitude, longitude]).addTo(map)
  //   .bindPopup('Location')
  //   .openPopup();
});