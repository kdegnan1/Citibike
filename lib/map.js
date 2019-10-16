

let map; 

let infoWindow; 
function initMap() { 
    map = new google.maps.Map(document.getElementById('map'), { 
        center: { lat: 40.73778, lng: -73.98611 },
        zoom: 15, 
        streetViewControl: false,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                // elementType: 'labels.text.fill',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'poi.park',
                // elementType: 'geometry',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'poi.park',
                // elementType: 'labels.text.fill',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                // elementType: 'geometry',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'road.highway',
                // elementType: 'geometry.stroke',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'road.highway',
                // elementType: 'labels.text.fill',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit',
                // elementType: 'geometry',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit.station',
                // elementType: 'labels.text.fill',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    })
    window.map = map; 

    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}



// export default map; 