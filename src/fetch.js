
function makeRequest('GET', 'http://citibikenyc.com/stations/json', true) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://citibikenyc.com/stations/json');
    xhr.onload = function () {
        done(null, xhr.response);
    };
    xhr.send();
}

export default makeRequest; 
// And we'd call it as such:

makeRequest('GET', 'http://example.com', function (err, datums) {
    if (err) { throw err; }
    console.log(datums);
});


