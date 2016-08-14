'use strict';

eventsApp.controller('EditEventController',

    function EditEventController($scope) {
        $scope.saveEvent = function (event, newEventForm) {
            if(newEventForm.$valid)
            alert("event " + event.name + " saved!" );
            else
                alert("Formulaire n'est pas valide")
        };
        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html" ;
        }
    }
);