'use strict';

/**
 * @ngdoc function
 * @name appstructureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appstructureApp
 */

var treeViewApp = angular.module('treeViewApp');

treeViewApp.controller('MainCtrl', function($scope) {
    $scope.treeData = {
                    folders: {
                        label: 'Folders',
                        childs: {
                            classi_school: {
                                label: 'Classi school',
                                childs: {
                                    controller: {
                                        label: 'Controller',
                                        childs: {

                                        }
                                    },
                                    directive: {
                                        label: 'Directive',
                                        childs: {

                                        }
                                    }
                                }
                            },
                            classi_school_front: {
                                label: 'Classi school front',
                                childs: {
                                    controller: {
                                        label: 'Controller',
                                        childs: {

                                        }
                                    },
                                    directive: {
                                        label: 'Directive',
                                        childs: {

                                        }
                                    }
                                }
                            },
                            autoload: {
                                label: 'Auto load',
                                childs: {
                                    controller: {
                                        label: 'Controller',
                                        childs: {

                                        }
                                    },
                                    directive: {
                                        label: 'Directive',
                                        childs: {

                                        }
                                    }
                                }
                            },
                            todo: {
                                label: 'Todo',
                                childs: {

                                }
                            }
                        }
                    }
                };
});