

let map; 

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

    // var locations = [
    //     { lat: 40.7128, lng: -74.0060 },
    //     { lat: 40.7484, lng: -73.9857 }
    // ]
    // var markers = locations.map(function (location, i) {
    //     return new google.maps.Marker({
    //         position: location,
    //         label: "Hi"
    //     });
    // });
    // // console.log(markers)
    // markers.forEach(marker => marker.setMap(map)); 
}

// export default map; 