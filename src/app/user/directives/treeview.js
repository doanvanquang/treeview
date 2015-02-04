(function() {
    'use strict';

    var userModule = angular.module('treeViewApp');

    userModule.directive('treeView', function(TreeViewService, $timeout) {
        return {
            restrict: 'E',
            scope: {
                treeData: '=',
                selectedNode: '='
            },
            templateUrl: 'app/user/views/templates/treeview.html',
            controller: function($scope) {
                $scope.toggle = function(node, e) {
                    e.stopPropagation();
                    node.toggle();
                }
            },
            link: function(scope, iElement, attrs) {
                var tree = TreeViewService.createFromObject(scope.treeData);

                scope.tree = tree;
            }
        };
    });
})();