/*!
 * Copyright (c) 2013-2014, Sierra Wireless
 * Released under the BSD license
 * https://raw.githubusercontent.com/jvermillard/leshan/master/LICENSE
 */

'use strict';

/* App Module */

var leshanApp = angular.module('leshanApp',[ 
        'ngRoute',
        'clientControllers',
        'objectDirectives',
        'instanceDirectives',
        'resourceDirectives',
        'resourceFormDirectives',
        'lwResourcesServices',
        'securityControllers',
        'uiDialogServices',
        'modalInstanceControllers',
        'ui.bootstrap',
]);

leshanApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/clients',           { templateUrl : 'partials/client-list.html',   controller : 'ClientListCtrl' }).
        when('/clients/:clientId', { templateUrl : 'partials/client-detail.html', controller : 'ClientDetailCtrl' }).
        when('/security',          { templateUrl : 'partials/security-list.html', controller : 'SecurityCtrl' }).
        otherwise({ redirectTo : '/clients' });
}]);
