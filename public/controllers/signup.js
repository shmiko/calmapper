/**
 * Created by pauljones on 4/10/15.
 */
angular.module('CalMapper')
    .controller('SignupCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.signup = function() {
            Auth.signup({
                email: $scope.email,
                password: $scope.password
            });
        };
    }]);