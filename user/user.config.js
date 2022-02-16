function userConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('user', {
    url: '',
    controller: 'UserCtrl',
    controllerAs: '$Uctrl',
    templateUrl: 'user/user.html',
  });
}

export default userConfig;
