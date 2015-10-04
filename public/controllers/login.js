/**
 * Created by pauljones on 4/10/15.
 */
angular.module('CalMapper')
    .controller('LoginCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.login = function() {
            Auth.login({
                email: $scope.email,
                password: $scope.password
            });
        };
    }]);