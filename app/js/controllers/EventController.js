'use strict';

eventsApp.controller('EventController',
    function ($scope) {

        $scope.sniffer = "<span style='color: red'>h1 there</span>";
        $scope.boolValue = false;
        $scope.myclass = "background-color:blue";
        $scope.buttonDisabled = false;
        $scope.sortorder = '-upVoteCount';

            $scope.event = {
                name: 'Angular Boot camp',
                date: '1/1/2013',
                time: '10:30 am',
                imageUrl: '/img/angularjs-logo.png',
                location: {
                    address: 'Morocco',
                    city: 'casablanca ',
                    province: 'Ds '
                },
                sessions: [
                    {
                        name: 'Directives Masterclass Introductory',
                        creatorName: 'Bob smith',
                        duration: '1 hr',
                        level: 'advance',
                        abstract: 'In this session you will learn the ins and outs of directives!!',
                        upVoteCount: 0
                    },
                    {
                        name: 'Directives Masterclass',
                        creatorName: 'john Doe',
                        duration: '30 mins',
                        level: 'introductory',
                        abstract: 'This session will take a closer look at scopes ',
                        upVoteCount: 0
                    },
                    {
                        name: 'Well Behaved Controllers',
                        creatorName: 'Jane Doe',
                        duration: '2 hours',
                        level: 'intermediate',
                        abstract: 'Controller are the beginning of everything Angular',
                        upVoteCount: 0
                    }
                ]
            };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }
);