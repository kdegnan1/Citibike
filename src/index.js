import './styles/index.scss';
import makeRequest from './fetch'
import {initAutocomplete} from '../lib/map'

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    // initAutocomplete()
    makeRequest('GET', 'https://cors-anywhere.herokuapp.com/https://citibikenyc.com/stations/json')
    .then((datums) => {
    JSON.parse(datums)["stationBeanList"].forEach( bike => { 
        
        const contentString = `<div>${'Available Bikes:  '}</div><div>${bike['availableBikes']}</div>`

            let icon = {
                url: 'https://i.imgur.com/4dysiV6.png', 
                scaledSize: new google.maps.Size(50, 50), // scaled size
            };

            let marker = new google.maps.Marker({
                position: { lat: bike['latitude'], lng: bike['longitude'] },
                // title: 'Available Bikes:  ' +  bike['availableBikes'].toString(), 
                icon: icon, 
                htmlContent: contentString
            });
           

            marker.addListener("click", function () {
                infoWindow.setContent(marker.htmlContent)
                infoWindow.open(map, marker);
            });

        marker.setMap(map) 

        })}
    )}
); 



  // info.push({ lat: bike['latitude'], lng: bike['longitude'] })
            // const availableDocks: bike['availableDocks']