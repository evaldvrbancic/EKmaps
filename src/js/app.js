import $ from 'dom7';
import Framework7, { getDevice } from 'framework7/bundle';

// Import F7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';


// Import main app component
import App from '../app.f7.html';

var device = getDevice();
var app = new Framework7({
  name: 'EKmaps', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  id: 'io.framework7.ekmaps', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: true,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
      app.request.get('https://reqbin.com/echo/get/json')
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err.xhr)
          console.log(err.status)
          console.log(err.message)
        })
    },
  },
});

function testGet() {
  app.get('https://reqbin.com/echo/get/json')
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err.xhr)
      console.log(err.status)
      console.log(err.message)
    })
}
function myFunction(){
  console.log1;
  }