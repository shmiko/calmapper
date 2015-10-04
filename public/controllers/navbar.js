/**
 * Created by pauljones on 4/10/15.
 */
angular.module('CalMapper')
    .controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.logout = function() {
            Auth.logout();
        };
    }]);