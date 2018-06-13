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


       if(typeof $scope.food === 'undefined')
      {
          $scope.message = "Enter the items";
          return;
        }

      if($scope.food.length==0)

        {
            $scope.message = "Enter the items";
            return;
          }

      var FoodArray = $scope.food.split(',');
      var items = FoodArray.length;





         if(items<=3)
        $scope.message="Enjoy";

        else
        $scope.message="Too much";

    };


}


})();
