'use strict';
eventsApp.controller('CompileSampleController', function CacheSampleController($scope, $compile, $parse) {

    var fn = $parse('1+2');
    console.log(fn());
    var getter = $parse('event.name');

    var context1 = {event: {name: 'AngularJS BOOT Camp'}};
    var context2 = {event: {name: 'CodeCamp'}};

    console.log(getter(context1));
    console.log(getter(context2));
    console.log(getter(context1,context2));

    var setter = getter.assign;
    setter(context2,'Code Retrest');

    $scope.appendDivToElement = function (markup) {
        return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
    }
});