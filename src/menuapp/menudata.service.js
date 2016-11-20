(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  service.getAllCategories = function () {
  };

  service.getItemsForCategory(categoryShortName) = function () {
  };
}

})();
