(function () {
    'use strict';

    angular.module('fs-angular-stat',[])
    .directive('fsStat', function($location) {
        return {
            templateUrl: 'views/directives/stat.html',
            restrict: 'E',
            transclude: true,
            scope: {
               selected: "@fsSelected"
            },

            link: function($scope, element, attrs, ctrl, $transclude) {
                $scope.items = [];

                $transclude(function(clone, scope) {
                    
                    angular.forEach(clone,function(el) {
                        if(el.nodeName.match(/fs-stat-item/i)) {
                            var path = el.getAttributeNode('fs-url') ? el.getAttributeNode('fs-url').nodeValue : '';                        
                            $scope.items.push({ path: path, name: el.textContent });
                        }
                    });
                });

                $scope.redirect = function(path) {
                    $location.path(path);
                }
            }
        };
    });
})();