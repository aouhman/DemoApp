'use strict';

eventsApp.controller('EditEventController',

    function EditEventController($scope, eventData) {
        $scope.event = {} ;
        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.save(event).
                    $promise.then(

                            function (response) {
                                console.log(event);
                                console.log('success', response)
                            })



            }
        };
        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        }
    }
);