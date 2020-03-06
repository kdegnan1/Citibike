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
    xhr.setRequestHeader('Accept', "*/*");
    var data = xhr.open(method, url);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJtYXAiLCJpbmZvV2luZG93IiwiaW5pdE1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwibGF0IiwibG5nIiwiem9vbSIsInN0cmVldFZpZXdDb250cm9sIiwic3R5bGVzIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwiY29sb3IiLCJmZWF0dXJlVHlwZSIsInZpc2liaWxpdHkiLCJ3aW5kb3ciLCJJbmZvV2luZG93IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsInBvcyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0UG9zaXRpb24iLCJzZXRDb250ZW50Iiwib3BlbiIsInNldENlbnRlciIsImhhbmRsZUxvY2F0aW9uRXJyb3IiLCJnZXRDZW50ZXIiLCJicm93c2VySGFzR2VvbG9jYXRpb24iLCJtYWtlUmVxdWVzdCIsIm1ldGhvZCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZGF0YSIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwiZGF0dW1zIiwiSlNPTiIsInBhcnNlIiwiZm9yRWFjaCIsImJpa2UiLCJjb250ZW50U3RyaW5nIiwiaWNvbiIsInNjYWxlZFNpemUiLCJTaXplIiwibWFya2Vy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QkFBbkIsRUFBc0NHLE9BQXRDLENBQStDLFVBQUFDLElBQUksRUFBSTtBQUVuRCxVQUFNQyxhQUFhLGtCQUFXLG9CQUFYLGlCQUE2Q0QsSUFBSSxDQUFDLGdCQUFELENBQWpELFdBQW5CO0FBRUksVUFBSUUsSUFBSSxHQUFHO0FBQ1B4QixXQUFHLEVBQUUsaUNBREU7QUFFUHlCLGtCQUFVLEVBQUUsSUFBSTVELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNEQsSUFBaEIsQ0FBcUIsRUFBckIsRUFBeUIsRUFBekIsQ0FGTCxDQUVtQzs7QUFGbkMsT0FBWDtBQUtBLFVBQUlDLE1BQU0sR0FBRyxJQUFJOUQsTUFBTSxDQUFDQyxJQUFQLENBQVk4RCxNQUFoQixDQUF1QjtBQUNoQzFDLGdCQUFRLEVBQUU7QUFBRWYsYUFBRyxFQUFFbUQsSUFBSSxDQUFDLFVBQUQsQ0FBWDtBQUF5QmxELGFBQUcsRUFBRWtELElBQUksQ0FBQyxXQUFEO0FBQWxDLFNBRHNCO0FBRWhDO0FBQ0FFLFlBQUksRUFBRUEsSUFIMEI7QUFJaENLLG1CQUFXLEVBQUVOO0FBSm1CLE9BQXZCLENBQWI7QUFRQUksWUFBTSxDQUFDRyxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLFlBQVk7QUFDcENuRSxrQkFBVSxDQUFDNkIsVUFBWCxDQUFzQm1DLE1BQU0sQ0FBQ0UsV0FBN0I7QUFDQWxFLGtCQUFVLENBQUM4QixJQUFYLENBQWdCL0IsR0FBaEIsRUFBcUJpRSxNQUFyQjtBQUNILE9BSEQ7QUFLSkEsWUFBTSxDQUFDSSxNQUFQLENBQWNyRSxHQUFkO0FBRUMsS0F4Qkw7QUF3Qk8sR0EzQlA7QUE0QkUsQ0EvQk4sRSxDQW9DRTtBQUNVLCtDOzs7Ozs7Ozs7OztBQ3pDWix1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcblxubGV0IG1hcDsgXG5cbmxldCBpbmZvV2luZG93OyBcbmZ1bmN0aW9uIGluaXRNYXAoKSB7IFxuICAgXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHsgXG4gICAgICAgIGNlbnRlcjogeyBsYXQ6IDQwLjczNzc4LCBsbmc6IC03My45ODYxMSB9LFxuICAgICAgICB6b29tOiAxNSwgXG4gICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICAgICAgc3R5bGVzOiBbXG4gICAgICAgICAgICB7IGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyMyNDJmM2UnIH1dIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuc3Ryb2tlJywgc3R5bGVyczogW3sgY29sb3I6ICcjMjQyZjNlJyB9XSB9LFxuICAgICAgICAgICAgeyBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyM3NDY4NTUnIH1dIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eScsXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogJyNkNTk1NjMnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pJyxcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvZmYnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvZmYnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29mZicgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogJyMzODQxNGUnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzIxMmEzNycgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzljYTViMycgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvZmYnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29mZicgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29mZicgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0JyxcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb2ZmJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQuc3RhdGlvbicsXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5maWxsJyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb2ZmJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogJyMxNzI2M2MnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjNTE1YzZkJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjMTcyNjNjJyB9XVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSlcbiAgICB3aW5kb3cubWFwID0gbWFwOyBcblxuXG4gICBcblxuICAgIFxuXG4gICAgaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93O1xuXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGluZm9XaW5kb3cuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgIGluZm9XaW5kb3cuc2V0Q29udGVudCgnTG9jYXRpb24gZm91bmQuJyk7XG4gICAgICAgICAgICBpbmZvV2luZG93Lm9wZW4obWFwKTtcbiAgICAgICAgICAgIG1hcC5zZXRDZW50ZXIocG9zKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGFuZGxlTG9jYXRpb25FcnJvcih0cnVlLCBpbmZvV2luZG93LCBtYXAuZ2V0Q2VudGVyKCkpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBcbiAgICAgICAgaGFuZGxlTG9jYXRpb25FcnJvcihmYWxzZSwgaW5mb1dpbmRvdywgbWFwLmdldENlbnRlcigpKTtcbiAgICB9XG5cbiAgIFxufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZUxvY2F0aW9uRXJyb3IoYnJvd3Nlckhhc0dlb2xvY2F0aW9uLCBpbmZvV2luZG93LCBwb3MpIHtcbiAgICBpbmZvV2luZG93LnNldFBvc2l0aW9uKHBvcyk7XG4gICAgaW5mb1dpbmRvdy5zZXRDb250ZW50KGJyb3dzZXJIYXNHZW9sb2NhdGlvbiA/XG4gICAgICAgICdFcnJvcjogVGhlIEdlb2xvY2F0aW9uIHNlcnZpY2UgZmFpbGVkLicgOlxuICAgICAgICAnRXJyb3I6IFlvdXIgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi4nKTtcbiAgICBpbmZvV2luZG93Lm9wZW4obWFwKTtcbn1cblxuXG5cblxuXG4iLCJcbmNvbnN0IG1ha2VSZXF1ZXN0PSAobWV0aG9kLCB1cmwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCBcIiovKlwiKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYWtlUmVxdWVzdDsgXG5cblxuXG5cbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgbWFrZVJlcXVlc3QgZnJvbSAnLi9mZXRjaCdcbmltcG9ydCB7aW5pdEF1dG9jb21wbGV0ZX0gZnJvbSAnLi4vbGliL21hcCdcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2xvYWRlZCcpXG4gICAgLy8gaW5pdEF1dG9jb21wbGV0ZSgpXG4gICAgbWFrZVJlcXVlc3QoJ0dFVCcsICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS9odHRwczovL2NpdGliaWtlbnljLmNvbS9zdGF0aW9ucy9qc29uJylcbiAgICAgICBcbiAgICAgICAgLnRoZW4oKGRhdHVtcykgPT4ge1xuICAgIEpTT04ucGFyc2UoZGF0dW1zKVtcInN0YXRpb25CZWFuTGlzdFwiXS5mb3JFYWNoKCBiaWtlID0+IHsgXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250ZW50U3RyaW5nID0gYDxkaXY+JHsnQXZhaWxhYmxlIEJpa2VzOiAgJ308L2Rpdj48ZGl2PiR7YmlrZVsnYXZhaWxhYmxlQmlrZXMnXX08L2Rpdj5gXG5cbiAgICAgICAgICAgIGxldCBpY29uID0ge1xuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vaS5pbWd1ci5jb20vNGR5c2lWNi5wbmcnLCBcbiAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg1MCwgNTApLCAvLyBzY2FsZWQgc2l6ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogYmlrZVsnbGF0aXR1ZGUnXSwgbG5nOiBiaWtlWydsb25naXR1ZGUnXSB9LFxuICAgICAgICAgICAgICAgIC8vIHRpdGxlOiAnQXZhaWxhYmxlIEJpa2VzOiAgJyArICBiaWtlWydhdmFpbGFibGVCaWtlcyddLnRvU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgIGljb246IGljb24sIFxuICAgICAgICAgICAgICAgIGh0bWxDb250ZW50OiBjb250ZW50U3RyaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpbmZvV2luZG93LnNldENvbnRlbnQobWFya2VyLmh0bWxDb250ZW50KVxuICAgICAgICAgICAgICAgIGluZm9XaW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBtYXJrZXIuc2V0TWFwKG1hcCkgXG5cbiAgICAgICAgfSl9XG4gICAgKX1cbik7IFxuXG5cblxuICAvLyBpbmZvLnB1c2goeyBsYXQ6IGJpa2VbJ2xhdGl0dWRlJ10sIGxuZzogYmlrZVsnbG9uZ2l0dWRlJ10gfSlcbiAgICAgICAgICAgIC8vIGNvbnN0IGF2YWlsYWJsZURvY2tzOiBiaWtlWydhdmFpbGFibGVEb2NrcyddIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==