import angular from 'angular';

// Create the module where our functionality can attach to
let userModule = angular.module('user', []);

// Include our UI-Router config settings
import userConfig from './user.config';
userModule.config(userConfig);

// Controllers
import UserCtrl from './user.controller';
userModule.controller('UserCtrl', UserCtrl);

export default userModule;
