import './styles/index.scss';
import makeRequest from './fetch'

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    makeRequest('GET', 'https://cors-anywhere.herokuapp.com/http://citibikenyc.com/stations/json')
    .then(function (datums) {
        console.log(datums);
    })

}); 



    // fetch('http://citibikenyc.com/stations/json'
    // ).then(res => res.json()
    // ).then( 
    //     data => console.log(data)
    // ) 
    // ).then(res => { 
    //     res.map( resp => {
    //         latitude = resp[stationBeanList][latitude], 
    //         longitute = resp[stationBeanList][longitude], 
    //         availableDocks = resp[stationBeanList][availableDocks]
    //     })
        
 


// window.addEventListener('DOMContentLoaded', () => {
//     console.log('loaded')
//     fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615,-73.9976592&key=AIzaSyB0eLDJgLGyoqtqyA7cHYbexDoGjuFfxuk'
// ).then(res => console.log(res)) 
// });