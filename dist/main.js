/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/map.js":
/*!********************!*\
  !*** ./lib/map.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var map;
var infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 40.73778,
      lng: -73.98611
    },
    zoom: 15,
    streetViewControl: false,
    styles: [{
      elementType: 'geometry',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#746855'
      }]
    }, {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#d59563'
      }]
    }, {
      featureType: 'poi',
      // elementType: 'labels.text.fill',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'poi.park',
      // elementType: 'geometry',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'poi.park',
      // elementType: 'labels.text.fill',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
        color: '#38414e'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#212a37'
      }]
    }, {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#9ca5b3'
      }]
    }, {
      featureType: 'road.highway',
      // elementType: 'geometry',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'road.highway',
      // elementType: 'geometry.stroke',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'road.highway',
      // elementType: 'labels.text.fill',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'transit',
      // elementType: 'geometry',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'transit.station',
      // elementType: 'labels.text.fill',
      stylers: [{
        visibility: 'off'
      }]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{
        color: '#17263c'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#515c6d'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#17263c'
      }]
    }]
  });
  window.map = map;
  infoWindow = new google.maps.InfoWindow();

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
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var makeRequest = function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', "*/*");

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
};

/* harmony default export */ __webpack_exports__["default"] = (makeRequest);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _lib_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/map */ "./lib/map.js");
/* harmony import */ var _lib_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_map__WEBPACK_IMPORTED_MODULE_2__);



window.addEventListener('DOMContentLoaded', function () {
  console.log('loaded'); // initAutocomplete()

  Object(_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])('GET', 'https://cors-anywhere.herokuapp.com/https://citibikenyc.com/stations/json').then(function (datums) {
    JSON.parse(datums)["stationBeanList"].forEach(function (bike) {
      var contentString = "<div>".concat('Available Bikes:  ', "</div><div>", bike['availableBikes'], "</div>");
      var icon = {
        url: 'https://i.imgur.com/4dysiV6.png',
        scaledSize: new google.maps.Size(50, 50) // scaled size

      };
      var marker = new google.maps.Marker({
        position: {
          lat: bike['latitude'],
          lng: bike['longitude']
        },
        // title: 'Available Bikes:  ' +  bike['availableBikes'].toString(), 
        icon: icon,
        htmlContent: contentString
      });
      marker.addListener("click", function () {
        infoWindow.setContent(marker.htmlContent);
        infoWindow.open(map, marker);
      });
      marker.setMap(map);
    });
  });
}); // info.push({ lat: bike['latitude'], lng: bike['longitude'] })
// const availableDocks: bike['availableDocks']

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJtYXAiLCJpbmZvV2luZG93IiwiaW5pdE1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwibGF0IiwibG5nIiwiem9vbSIsInN0cmVldFZpZXdDb250cm9sIiwic3R5bGVzIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwiY29sb3IiLCJmZWF0dXJlVHlwZSIsInZpc2liaWxpdHkiLCJ3aW5kb3ciLCJJbmZvV2luZG93IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsInBvcyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0UG9zaXRpb24iLCJzZXRDb250ZW50Iiwib3BlbiIsInNldENlbnRlciIsImhhbmRsZUxvY2F0aW9uRXJyb3IiLCJnZXRDZW50ZXIiLCJicm93c2VySGFzR2VvbG9jYXRpb24iLCJtYWtlUmVxdWVzdCIsIm1ldGhvZCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJkYXR1bXMiLCJKU09OIiwicGFyc2UiLCJmb3JFYWNoIiwiYmlrZSIsImNvbnRlbnRTdHJpbmciLCJpY29uIiwic2NhbGVkU2l6ZSIsIlNpemUiLCJtYXJrZXIiLCJNYXJr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QUMsSUFBSSxFQUFJO0FBRW5ELFVBQU1DLGFBQWEsa0JBQVcsb0JBQVgsaUJBQTZDRCxJQUFJLENBQUMsZ0JBQUQsQ0FBakQsV0FBbkI7QUFFSSxVQUFJRSxJQUFJLEdBQUc7QUFDUHZCLFdBQUcsRUFBRSxpQ0FERTtBQUVQd0Isa0JBQVUsRUFBRSxJQUFJM0QsTUFBTSxDQUFDQyxJQUFQLENBQVkyRCxJQUFoQixDQUFxQixFQUFyQixFQUF5QixFQUF6QixDQUZMLENBRW1DOztBQUZuQyxPQUFYO0FBS0EsVUFBSUMsTUFBTSxHQUFHLElBQUk3RCxNQUFNLENBQUNDLElBQVAsQ0FBWTZELE1BQWhCLENBQXVCO0FBQ2hDekMsZ0JBQVEsRUFBRTtBQUFFZixhQUFHLEVBQUVrRCxJQUFJLENBQUMsVUFBRCxDQUFYO0FBQXlCakQsYUFBRyxFQUFFaUQsSUFBSSxDQUFDLFdBQUQ7QUFBbEMsU0FEc0I7QUFFaEM7QUFDQUUsWUFBSSxFQUFFQSxJQUgwQjtBQUloQ0ssbUJBQVcsRUFBRU47QUFKbUIsT0FBdkIsQ0FBYjtBQVFBSSxZQUFNLENBQUNHLFdBQVAsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUNwQ2xFLGtCQUFVLENBQUM2QixVQUFYLENBQXNCa0MsTUFBTSxDQUFDRSxXQUE3QjtBQUNBakUsa0JBQVUsQ0FBQzhCLElBQVgsQ0FBZ0IvQixHQUFoQixFQUFxQmdFLE1BQXJCO0FBQ0gsT0FIRDtBQUtKQSxZQUFNLENBQUNJLE1BQVAsQ0FBY3BFLEdBQWQ7QUFFQyxLQXhCTDtBQXdCTyxHQTNCUDtBQTRCRSxDQS9CTixFLENBb0NFO0FBQ1UsK0M7Ozs7Ozs7Ozs7O0FDekNaLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuXG5sZXQgbWFwOyBcblxubGV0IGluZm9XaW5kb3c7IFxuZnVuY3Rpb24gaW5pdE1hcCgpIHsgXG4gICBcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwgeyBcbiAgICAgICAgY2VudGVyOiB7IGxhdDogNDAuNzM3NzgsIGxuZzogLTczLjk4NjExIH0sXG4gICAgICAgIHpvb206IDE1LCBcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICBzdHlsZXM6IFtcbiAgICAgICAgICAgIHsgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzI0MmYzZScgfV0gfSxcbiAgICAgICAgICAgIHsgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyMyNDJmM2UnIH1dIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzc0Njg1NScgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlLmxvY2FsaXR5JyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2Q1OTU2MycgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29mZicgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29mZicgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb2ZmJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzM4NDE0ZScgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjMjEyYTM3JyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjOWNhNWIzJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29mZicgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnkuc3Ryb2tlJyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb2ZmJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb2ZmJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQnLFxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvZmYnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdC5zdGF0aW9uJyxcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvZmYnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzE3MjYzYycgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogJyM1MTVjNmQnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuc3Ryb2tlJyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogJyMxNzI2M2MnIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KVxuICAgIHdpbmRvdy5tYXAgPSBtYXA7IFxuXG5cbiAgIFxuXG4gICAgXG5cbiAgICBpbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3c7XG5cbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0ge1xuICAgICAgICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW5mb1dpbmRvdy5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgaW5mb1dpbmRvdy5zZXRDb250ZW50KCdMb2NhdGlvbiBmb3VuZC4nKTtcbiAgICAgICAgICAgIGluZm9XaW5kb3cub3BlbihtYXApO1xuICAgICAgICAgICAgbWFwLnNldENlbnRlcihwb3MpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBoYW5kbGVMb2NhdGlvbkVycm9yKHRydWUsIGluZm9XaW5kb3csIG1hcC5nZXRDZW50ZXIoKSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFxuICAgICAgICBoYW5kbGVMb2NhdGlvbkVycm9yKGZhbHNlLCBpbmZvV2luZG93LCBtYXAuZ2V0Q2VudGVyKCkpO1xuICAgIH1cblxuICAgXG59XG5cblxuZnVuY3Rpb24gaGFuZGxlTG9jYXRpb25FcnJvcihicm93c2VySGFzR2VvbG9jYXRpb24sIGluZm9XaW5kb3csIHBvcykge1xuICAgIGluZm9XaW5kb3cuc2V0UG9zaXRpb24ocG9zKTtcbiAgICBpbmZvV2luZG93LnNldENvbnRlbnQoYnJvd3Nlckhhc0dlb2xvY2F0aW9uID9cbiAgICAgICAgJ0Vycm9yOiBUaGUgR2VvbG9jYXRpb24gc2VydmljZSBmYWlsZWQuJyA6XG4gICAgICAgICdFcnJvcjogWW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IGdlb2xvY2F0aW9uLicpO1xuICAgIGluZm9XaW5kb3cub3BlbihtYXApO1xufVxuXG5cblxuXG5cbiIsIlxuY29uc3QgbWFrZVJlcXVlc3Q9IChtZXRob2QsIHVybCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgXCIqLypcIik7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJlcXVlc3Q7IFxuXG5cblxuXG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IG1ha2VSZXF1ZXN0IGZyb20gJy4vZmV0Y2gnXG5pbXBvcnQge2luaXRBdXRvY29tcGxldGV9IGZyb20gJy4uL2xpYi9tYXAnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdsb2FkZWQnKVxuICAgIC8vIGluaXRBdXRvY29tcGxldGUoKVxuICAgIG1ha2VSZXF1ZXN0KCdHRVQnLCAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9jaXRpYmlrZW55Yy5jb20vc3RhdGlvbnMvanNvbicpXG4gICAgICAgXG4gICAgICAgIC50aGVuKChkYXR1bXMpID0+IHtcbiAgICBKU09OLnBhcnNlKGRhdHVtcylbXCJzdGF0aW9uQmVhbkxpc3RcIl0uZm9yRWFjaCggYmlrZSA9PiB7IFxuICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGVudFN0cmluZyA9IGA8ZGl2PiR7J0F2YWlsYWJsZSBCaWtlczogICd9PC9kaXY+PGRpdj4ke2Jpa2VbJ2F2YWlsYWJsZUJpa2VzJ119PC9kaXY+YFxuXG4gICAgICAgICAgICBsZXQgaWNvbiA9IHtcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2kuaW1ndXIuY29tLzRkeXNpVjYucG5nJywgXG4gICAgICAgICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNTAsIDUwKSwgLy8gc2NhbGVkIHNpemVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IGJpa2VbJ2xhdGl0dWRlJ10sIGxuZzogYmlrZVsnbG9uZ2l0dWRlJ10gfSxcbiAgICAgICAgICAgICAgICAvLyB0aXRsZTogJ0F2YWlsYWJsZSBCaWtlczogICcgKyAgYmlrZVsnYXZhaWxhYmxlQmlrZXMnXS50b1N0cmluZygpLCBcbiAgICAgICAgICAgICAgICBpY29uOiBpY29uLCBcbiAgICAgICAgICAgICAgICBodG1sQ29udGVudDogY29udGVudFN0cmluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5mb1dpbmRvdy5zZXRDb250ZW50KG1hcmtlci5odG1sQ29udGVudClcbiAgICAgICAgICAgICAgICBpbmZvV2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbWFya2VyLnNldE1hcChtYXApIFxuXG4gICAgICAgIH0pfVxuICAgICl9XG4pOyBcblxuXG5cbiAgLy8gaW5mby5wdXNoKHsgbGF0OiBiaWtlWydsYXRpdHVkZSddLCBsbmc6IGJpa2VbJ2xvbmdpdHVkZSddIH0pXG4gICAgICAgICAgICAvLyBjb25zdCBhdmFpbGFibGVEb2NrczogYmlrZVsnYXZhaWxhYmxlRG9ja3MnXSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=