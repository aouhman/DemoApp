'use strict';


eventsApp.directive('mySample', function ($compile) {
    return {
        link: function (scope, element, attrs, controller) {
            var markup = "<input type='text' ng-model='sampleDate'/>{{sampleDate}}<br/>";
            angular.element(element).html($compile(markup)(scope));
        }
    }
});