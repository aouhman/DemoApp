'use strict';

eventsApp.controller('EventController',
    function ($scope) {

        $scope.upVoteSession = function (session) {
             session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

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
                    name: 'Directives Masterclass',
                    creatorName: 'Bob smith',
                    duration: '1 hr',
                    level: 'Advance',
                    abstract: 'In this session you will learn the ins and outs of directives!!',
                    upVoteCount: 0
                },
                {
                    name: 'Directives Masterclass',
                    creatorName: 'john Doe',
                    duration: '30 mins',
                    level: 'Introduction',
                    abstract: 'This session will take a closer look at scopes ',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controller are the beginning of everything Angular',
                    upVoteCount: 0
                }
            ]
        }
    }
);