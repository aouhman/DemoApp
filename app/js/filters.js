'use strict';


eventsApp.filter('durations', function () {
    return function (duration) {
        switch (duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half day";
            case 4:
                return "Full day ";
            default:
                return "donn�es incorrectes"
        }
    }
});