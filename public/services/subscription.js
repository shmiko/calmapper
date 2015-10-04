/**
 * Created by pauljones on 4/10/15.
 */
angular.module('CalMapper')
    .factory('Subscription', ['$http', function($http) {
        return {
            subscribe: function(show, user) {
                return $http.post('/api/subscribe', { showId: show._id });
            },
            unsubscribe: function(show, user) {
                return $http.post('/api/unsubscribe', { showId: show._id });
            }
        };
    }]);