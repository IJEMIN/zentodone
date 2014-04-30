angular.module('zentodone', ['bp', 'angular-loading-bar', 'angularLocalStorage', 'hoodie'])
  .config(function($urlRouterProvider, $stateProvider, bpAppProvider, cfpLoadingBarProvider) {

    bpAppProvider.setConfig({
      platform: localStorage.getItem('platform') || 'ios'
    })

    cfpLoadingBarProvider.includeSpinner = false;

    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
      .state('inbox', {
        url: '/inbox',
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl'
      })
      .state('mit', {
        url: '/mit',
        templateUrl: 'views/mit.html',
        controller: 'MitCtrl',
        data: {
          title: 'Most Important Tasks'
        }
      })
      .state('br', {
        url: '/br',
        templateUrl: 'views/br.html',
        controller: 'BrCtrl',
        data: {
          title: 'Big Rocks'
        }
      })
      .state('task', {
        url: '/tasks/:id',
        templateUrl: 'views/task.html',
        controller: 'TaskCtrl',
        data: {
          up: 'inbox',
          transition: 'scale'
        }
      })
  })
