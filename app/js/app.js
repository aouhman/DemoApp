'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize','ngResource' ,'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                foo:'bar',
                template: 'Hello World',
                controller: 'EventController'
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });

        $routeProvider.otherwise({redirectTo:'/events'});
        $locationProvider.html5Mode(true);
    });
