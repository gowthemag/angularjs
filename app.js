import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home';
import './user';

// Create and bootstrap application
const requires = ['ui.router', 'user'];

window.app = angular.module('app', requires);
angular.bootstrap(document.getElementById('app'), ['app']);
