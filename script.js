// Clock
function updateClock() {
  const now = new Date();
  document.getElementById('clock').innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Calendar
const calendar = document.getElementById('calendar');
const today = new Date();
calendar.innerHTML = `<p><strong>Today:</strong> ${today.toDateString()}</p>`;

// Weather (OpenWeatherMap)
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const weatherBox = document.getElementById('weatherContent');
navigator.geolocation.getCurrentPosition(pos => {
  const { latitude, longitude } = pos.coords;
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      weatherBox.innerHTML = data.list.slice(0, 5).map(day => {
        return `<div class="flex justify-between text-sm">
                  <span>${new Date(day.dt_txt).toLocaleDateString()}</span>
                  <span>${day.main.temp.toFixed(1)}°C</span>
                </div>`;
      }).join('');
    })
    .catch(() => {
      weatherBox.innerText = 'Unable to load weather data.';
    });
});

// Slideshow
const images = [
  'https://source.unsplash.com/random/400x200?nature',
  'https://source.unsplash.com/random/400x200?city',
  'https://source.unsplash.com/random/400x200?technology'
];
let imgIndex = 0;
const slideshow = document.getElementById('slideshow');
function updateSlideshow() {
  slideshow.src = images[imgIndex];
  imgIndex = (imgIndex + 1) % images.length;
}
setInterval(updateSlideshow, 4000);
updateSlideshow();
