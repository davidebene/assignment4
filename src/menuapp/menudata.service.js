(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', '$q', 'ApiBasePath'];
function MenuDataService($http, $q, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    //console.log("getAllCategories");
    var deferred = $q.defer();

    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {

      deferred.resolve(result.data);
      return deferred.promise;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    //console.log("getItemsForCategory");
    var deferred = $q.defer();

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    }).then(function (result) {

      deferred.resolve(result);
      return deferred.promise;
    });
  };
}

})();
