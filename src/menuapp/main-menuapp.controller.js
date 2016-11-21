(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['MenuDataService', 'items', '$rootScope'];
function MainMenuAppController(MenuDataService, items, $rootScope) {
  console.log("MainMenuAppController");
  var $ctrl = this;
  var mainlist = this;

  $ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      console.log("stateChangeStart");
    });

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      console.log("stateChangeSuccess");
    });

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log("stateChangeError");
    });
  };

  $ctrl.$onDestroy = function () {
    console.log("onDestroy");
  };

  mainlist.items = items;
}

})();
