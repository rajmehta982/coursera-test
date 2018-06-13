(function()
{
  'use strict';

  angular.module('FoodCheck',[])
  .controller('FoodCheckController', FoodCheckController);
  FoodCheckController.$inject = ['$scope'];

  function FoodCheckController($scope)
  {

    $scope.message="";
    $scope.testfood = function()
    {


      var FoodArray = $scope.food.split(',');
      var items = FoodArray.length;
        if(items<=3)
        $scope.message="Enjoy";

        else
        $scope.message="Too much";

    };


}


})();
