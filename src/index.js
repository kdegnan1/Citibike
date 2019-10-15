import './styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    fetch('https://cors-anywhere.herokuapp.com/http://citibikenyc.com/stations/json'
    ).then(res => console.log(res)) 
});

// window.addEventListener('DOMContentLoaded', () => {
//     console.log('loaded')
//     fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615,-73.9976592&key=AIzaSyB0eLDJgLGyoqtqyA7cHYbexDoGjuFfxuk'
// ).then(res => console.log(res)) 
// });