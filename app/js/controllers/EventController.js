'use strict';

eventsApp.controller('EventController',
    function ($scope, eventData) {

        $scope.sniffer = "<span style='color: red'>h1 there</span>";
        $scope.boolValue = false;
        $scope.myclass = "background-color:blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = '-upVoteCount';
        $scope.event = eventData.event;
        $scope.event = eventData.getEvent()
            .success(function (event) {$scope.event = event;})
            .error(function (data, status, headers, config) {
                console.warn(data, status, headers(), config);
            });




        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }
);