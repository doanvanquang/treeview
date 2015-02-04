(function() {
    'use strict';

    var userApp = angular.module('treeViewApp');

    userApp.factory('TreeViewService', function() {

        var Node = function(title, isCollapsed, childNodes, parentNode, data) {
            isCollapsed = angular.isUndefined(isCollapsed) ? true : (!!isCollapsed);

            childNodes = childNodes || [];

            parentNode = parentNode || null;

            this.title = title;

            this.isCollapsed = isCollapsed;

            this.childNodes = childNodes;

            //Data associated with this node
            this.data = data;
        };

        Node.prototype.addNode = function(node) {
            this.childNodes.push(node);
        };

        Node.prototype.toggle = function() {
            this.isCollapsed = !this.isCollapsed;
        };

        Node.prototype.expand = function() {
            this.isCollapsed = false;
        }

        Node.prototype.collapse = function() {
            this.isCollapsed = true;
        }

        Node.prototype.toggleAll = function(collapse) {
            var isCollapsed = collapse,
                self = this;

            if (angular.isUndefined(collapse)) {
                isCollapsed = !this.isCollapsed;
            }

            angular.forEach(self.childNodes, function(node) {
                if (isCollapsed) {
                    //Collapse all
                    node.toggleAll(true);
                } else {
                    //Expand all
                    node.toggleAll(false);
                }
            });
        };

        Node.prototype.expandAll = function() {
            this.toggleAll(false);
        };

        Node.prototype.collapse = function() {
            this.toggleAll(true);
        }

        var Tree = function(root) {
            this.rootNode = root;
        };

        Tree.prototype.createFromObject = function(treeData, node) {
            var self = this;
            angular.forEach(treeData, function(item) {
                var newNode = new Node(item.label, true, [], node, item);
                self.createFromObject(item.childs, newNode);
                node.addNode(newNode);
            });
        };

        var service = {
            createFromObject: function(treeData) {
                var rootNode = new Node('Root');
                var tree = new Tree(rootNode);

                tree.createFromObject(treeData, rootNode);

                return tree;
            },
            Tree: Tree,
            Node: Node
        };

        return service;
    });
})();