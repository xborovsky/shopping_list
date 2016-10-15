(function() {
    
    'use strict';
    
    angular.module('Data')
        .service('DataService', DataService);
    
    DataService.$inject = [];
    function DataService() {
        var service = this,
            data = [{
                    id : 1,
                    name: "Apple",
                    quantity: 4,
                    date: "10.10.2016 12:01:55.213",
                    bought: false
                }, {
                    id : 2,
                    name: "Chips",
                    quantity: 1,
                    date: "11.10.2016 08:42:13.873",
                    bought: false
                }, {
                    id : 3,
                    name: "Chicken",
                    quantity: 2,
                    date: "11.10.2016 06:44:13.887",
                    bought: false
                }, {
                    id : 4,
                    name: "Milk",
                    quantity: 3,
                    date: "12.10.2016 18:09:01.003",
                    bought: false
                }];

        service.getItems = function() {
            return data;
        };
        
        service.addItem = function(item) {
            if (data.length === 0) {
                item.id = 1;
            } else if (!item.id) {
                item.id = _.max(data, function(item) { return item.id; }).id++;
            }
            data.push(item);
        };
        
        service.removeItemById = function(id) {
            var item = service.findItemById(id);
            data.splice(data.indexOf(item), 1);            
        };
        
        service.setBought = function(id) {
            var item = service.findItemById(id);
            item.bought = !item.bought;
        };
        
        service.findItemById = function(id) {
            return _.find(data, function(item) { return item.id === parseInt(id); });
        };
        
        service.updateItem = function(item) {
            for (var i=0; i<data.length; i++) {
                if (data[i].id == item.id) {
                    data[i] = item;
                }
            }
        };
    }
    
})();