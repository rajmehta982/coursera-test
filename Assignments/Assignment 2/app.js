 (function(){
  'use strict';

  angular.module('SLApp',[])
  .controller('ControllerBuy',toBuy)
  .controller('Controller2',alreadyBought)
  .service('SLService',SLService);

  ControllerBuy.$inject = ['SLService'];
  function toBuy(SLService){
    var itemtobuy = this;

    itemtobuy.toBuyList = SLService.getToBuyItems();

    itemtobuy.transferItems = function (itemIndex) {
      SLService.transferItems(itemIndex);
      SLService.removeItem(itemIndex);
    };

  }

  Controller2.$inject = ['SLService'];
  function alreadyBought(SLService){
    var showList = this;

    showList.alreadyboughtitems = SLService.getAlreadyBoughtItems();

  }

  function SLService(){
    var service = this;
    var toBuyItems =
      [
       {
        name : "Chips",
        quantity : "4 bags"
      },
      {
        name : "Milk",
        quantity : "2 litres"
      },
      {
        name : "Cereal" ,
        quantity : "2 units"
      },
      {
        name : "Apples",
        quantity : "1 kg"
      },
      {
        name : "Beer",
        quantity : "6 pints"
      }

    ];

    var alreadyBoughtItems = [];



    service.transferItems= function(itemIndex){
      var item = toBuyItems[itemIndex];
      alreadyBoughtItems.push(item);

    }

    service.getToBuyItems = function () {
      return toBuyItems;

    }

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;

    }

  service.removeItem = function(itemIndex){
      toBuyItems.splice(itemIndex,1);
       }
  }

})();
