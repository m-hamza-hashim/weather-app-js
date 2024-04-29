const staticDevCoffee = "dev-weather-app-js"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/imgs/icons/icon72.png",
  "/imgs/icons/icon96.png",
  "/imgs/icons/icon144.png",
  "/imgs/icons/icon192.png",
  "/imgs/icons/icon512.png",
  "/imgs/favicon.jpg",
  "imgs/weather/clear-day.svg",
  "imgs/weather/clear-night.svg",
  "imgs/weather/cloudy.svg",
  "imgs/weather/fog.svg",
  "imgs/weather/hail.svg",
  "imgs/weather/partly-cloudy-day.svg",
  "imgs/weather/partly-cloudy-night.svg",
  "imgs/weather/rain.svg",
  "imgs/weather/rain-snow.svg",
  "imgs/weather/rain-snow-showers-day.svg",
  "imgs/weather/rain-snow-showers-night.svg",
  "imgs/weather/showers-day.svg",
  "imgs/weather/showers-night.svg",
  "imgs/weather/sleet.svg",
  "imgs/weather/snow.svg",
  "imgs/weather/snow-showers-day.svg",
  "imgs/weather/snow-showers-night.svg",
  "imgs/weather/thunder.svg",
  "imgs/weather/thunder-rain.svg",
  "imgs/weather/thunder-showers-day.svg",
  "imgs/weather/thunder-showers-night.svg",
  "imgs/weather/wind.svg",
]


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
});
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});
