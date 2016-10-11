// Ionic howdy App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'howdy' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'howdy.controllers' is found in controllers.js
angular.module('howdy', ['ionic', 'howdy.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'app.module/dashboard/dashboard.html',
          controller: 'DashboardCtrl'
        }
      }
    })

    .state('app.search-disease', {
      url: '/search-disease',
      views: {
        'menuContent': {
          templateUrl: 'app.module/search-disease/search_disease.html',
          controller : 'SearchDiseaseCtrl'
        }
      }
    })

    .state('app.doc-nearby', {
      url: '/doc-nearby',
      views: {
        'menuContent': {
          templateUrl: 'app.module/doc-nearby/doc_nearby.html',
          controller : 'DocNearByCtrl'
        }
      }
    })

    .state('app.short-term-disease-satus', {
      url: '/short-term-disease-status',
      views: {
        'menuContent': {
          templateUrl: 'app.module/short-term-disease-status/short_term_disease_status.html',
          controller : 'ShortTermDiseaseStatusCtrl'
        }
      }
    })

    .state('app.long-term-disease-satus', {
      url: '/long-term-disease-satus',
      views: {
        'menuContent': {
          templateUrl: 'app.module/long-term-disease-satus/long_term_disease_satus.html',
          controller : 'LongTermDiseaseSatusCtrl'
        }
      }
    })

    .state('app.feedback', {
      url: '/feedback',
      views: {
        'menuContent': {
          templateUrl: 'app.module/feedback/feedback.html',
          controller : 'FeedbackCtrl'
        }
      }
    })

  /*.state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
  })

  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

.state('app.single', {
  url: '/playlists/:playlistId',
  views: {
    'menuContent': {
      templateUrl: 'templates/playlist.html',
      controller: 'PlaylistCtrl'
    }
  }
});*/
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});
