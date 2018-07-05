(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',foundItems);


function foundItems()
{
  var ddo = {
    templateUrl: 'itemsloaderindicator.template.html',
    scope: {
      items: '<',
      abcerror: '&',
      onRemove: '&',
      error: '<'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}




NarrowItDownController.$inject = ['MenuSearchService','$http'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.errorMessage = "";

  menu.display = function (searchTerm){


 var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
 menu.items = promise ;

 if(menu.items.length==0)
 menu.errorMessage = "Nothing Found";
 if(!searchTerm){
 menu.errorMessage = "Nothing Found";
 menu.items = [];
 }

};

menu.checkError = function(){

 if(!menu.search || menu.items.length==0)
 return true;
 return false;
}


menu.remove = function(itemIndex){
  menu.items.splice(itemIndex, 1);
};

}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;



  service.getMatchedMenuItems = function (searchTerm) {
     var found = [];
      $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    })
    .then(function(response)
    {

      var domain = response.data;
      console.log(domain);
      console.log(domain.menu_items.length);

    for(var i=0; i < domain.menu_items.length; i++ )
    {
      var name = domain.menu_items[i].description;
      if (name.indexOf(searchTerm) !== -1) {
        found.push(domain.menu_items[i]);
      }
    }
    console.log(found);

});


return found;

  };

 }


})();
