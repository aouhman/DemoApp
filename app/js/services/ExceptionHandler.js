'use strict';


events.factory('$exceptionHandler', function () {
    return function (exception) {
        console.log("exception handled: " + exception.message);
    }
});
