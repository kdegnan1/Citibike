let map; 

function initMap() { 
    map = new google.maps.Map(document.getElementById('map'), { 
        center: { lat: 40.73778, lng: -73.98611 },
        zoom: 13, 
        streetViewControl: false,
    })
    window.map = map; 

    var locations = [
        { lat: 40.7128, lng: -74.0060 },
        { lat: 40.7484, lng: -73.9857 }
    ]
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: "Hi"
        });
    });
    console.log(markers)
    markers.forEach(marker => marker.setMap(map)); 
}