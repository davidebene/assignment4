(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['MenuDataService', 'items'];
function MainMenuAppController(MenuDataService, items) {
  var mainlist = this;

  mainlist.items = items;
}

})();
