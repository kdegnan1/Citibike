
const makeRequest= (method, url) => {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
<<<<<<< HEAD
        xhr.setRequestHeader('Accept', "*/*");
=======
>>>>>>> 7bebc25b251cd2171c3eea60e13bc6bceeaf7430
        const data = xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}


export default makeRequest; 




