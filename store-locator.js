// Initialize the map and set its view to your preferred coordinates
var map = L.map('map').setView([28.6139, 77.2090], 13); // Set initial location to New Delhi

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Add a marker for the user's location
var userMarker = L.marker([28.6139, 77.2090]).addTo(map)
    .bindPopup('You are here').openPopup();

// Get user's current location
function locateUser() {
    map.locate({setView: true, maxZoom: 16});

    function onLocationFound(e) {
        var radius = e.accuracy / 2;

        // Update userMarker position
        userMarker.setLatLng(e.latlng)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        // Add circle around the user's position
        L.circle(e.latlng, radius).addTo(map);
    }

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
}

// Call the locateUser function when the page loads
locateUser();

// Store locations (replace these with your random addresses)
var storeLocations = [
    { latlng: [28.6145, 77.2020], name: 'Store 1' },
    { latlng: [28.6200, 77.2000], name: 'Store 2' },
    { latlng: [28.6185, 77.2100], name: 'Store 3' }
];

storeLocations.forEach(function(store) {
    L.marker(store.latlng).addTo(map)
        .bindPopup(store.name);
});
