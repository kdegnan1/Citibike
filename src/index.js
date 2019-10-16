import './styles/index.scss';
import makeRequest from './fetch'

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    makeRequest('GET', 'https://cors-anywhere.herokuapp.com/http://citibikenyc.com/stations/json')
    .then((datums) => {
    let info = []; 
    JSON.parse(datums)["stationBeanList"].forEach( bike => { 
            let marker = new google.maps.Marker({
                position: { lat: bike['latitude'], lng: bike['longitude'] },
                label: bike['availableDocks'].to_s
            });
        marker.setMap(map) 
        })}
    )}
); 



  // info.push({ lat: bike['latitude'], lng: bike['longitude'] })
            // const availableDocks: bike['availableDocks']