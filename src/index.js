import './styles/index.scss';
import makeRequest from './fetch'

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    makeRequest('GET', 'https://cors-anywhere.herokuapp.com/http://citibikenyc.com/stations/json')
    .then((datums) => {
    let info = []; 
    JSON.parse(datums)["stationBeanList"].forEach( bike => { 

        let icon = {
            url: 'https://i.imgur.com/4dysiV6.png', 
            scaledSize: new google.maps.Size(50, 50), // scaled size
        };
            let marker = new google.maps.Marker({
                position: { lat: bike['latitude'], lng: bike['longitude'] },
                title: 'Available Bikes:  ' +  bike['availableBikes'].toString(), 
                icon: icon
                // icon: 'http://maps.google.com/mapfiles/kml/paddle/blu-blank-lv.png'
            });
        marker.setMap(map) 
        })}
    )}
); 



  // info.push({ lat: bike['latitude'], lng: bike['longitude'] })
            // const availableDocks: bike['availableDocks']