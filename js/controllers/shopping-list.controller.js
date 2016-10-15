(function() {
    
    'use strict';
    
    angular.module('ShoppingListApp')
        .controller('ShoppingListController', ShoppingListController);
    
    ShoppingListController.$inject = ['items', 'DataService', '$state'];
    function ShoppingListController(items, DataService, $state) {
        var ctrl = this;

        ctrl.items = items;
        
        ctrl.removeItem = function(item) {
            DataService.removeItemById(item.id);
        };
        
        ctrl.setBought = function(item) {
            DataService.setBought(item.id);
            $state.go('list');
        };
    }
    
})();