mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [75.7873, 26.9124], //starting position [lng,lat]
  projection: "globe", // Display the map as a globe, since satellite-v9 defaults to Mercator
  zoom: 12,
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}><p>Exact Location will be provided after Booking</p></h4>`
    )
  )
  .addTo(map);
