(function() {
    
    'use strict';
    
    angular.module('ShoppingListApp')
        .controller('ItemEditorController', ItemEditorController);
    
    ItemEditorController.$inject = ['item', 'DataService', '$state'];
    function ItemEditorController(item, DataService, $state) {
        var ctrl = this;
        
        if (!item) {
            ctrl.item = {
                name : '',
                quantity : 0,
                bought : false
            };
        } else {
            ctrl.item = item;
        }
        
        ctrl.saveItem = function() {
            if (!ctrl.item.id) {
                DataService.addItem(ctrl.item);
            } else {
                DataService.updateItem(ctrl.item);
            }
            $state.go('list');
        };
    }
    
})();