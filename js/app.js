var app = angular.module('WalkthroughJS', ['ui.bootstrap', 'ui.router', 'firebase']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    .state('contents', {
      url: '/contents',
      templateUrl: 'templates/TableOfContents.html',
      controller: 'contentsCtrl'
    })
    .state('step-one', {
      url: '/step-one',
      templateUrl: 'templates/step-one.html',
      controller: 'stepsCtrl'
    })
    .state('step-two', {
      url: '/step-two',
      templateUrl: 'templates/step-two.html',
      controller: 'stepsCtrl'
    })
    .state('step-three', {
      url: '/step-three',
      templateUrl: 'templates/step-three.html',
      controller: 'stepsCtrl'
    })
    .state('step-four', {
      url: '/step-four',
      templateUrl: 'templates/step-four.html',
      controller: 'stepsCtrl'
    })
    .state('step-five', {
      url: '/step-five',
      templateUrl: 'templates/step-five.html',
      controller: 'stepsCtrl'
    })
    .state('step-six', {
      url: '/step-six',
      templateUrl: 'templates/step-six.html',
      controller: 'stepsCtrl'
    });




    $urlRouterProvider
        .otherwise('/');
});
