/**
 * Created by pauljones on 4/10/15.
 */
angular.module('CalMapper')
    .factory('Show', ['$resource', function($resource) {
        return $resource('/api/shows/:_id');
    }]);