/**
 * Created by pauljones on 4/10/15.
 */
angular.module('CalMapper').
    filter('fromNow', function() {
        return function(date) {
            return moment(date).fromNow();
        }
    });