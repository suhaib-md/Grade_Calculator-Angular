var app = angular.module('marks', []);
app.controller("ss", function($scope, $http) {
    $scope.real = 0;

    $scope.calc = function() {
        $scope.real = '-';
        
        // Create an object to send to the server
        var dataToSend = {
            m1: $scope.m1,
            m2: $scope.m2,
            m3: $scope.m3,
            m4: $scope.m4,
            m5: $scope.m5
        };

        // Make an HTTP POST request to the server
        $http.post('http://localhost:3000/api/calculateGrade', dataToSend)
            .then(function(response) {
                // Handle the response from the server
                $scope.real = response.data.grade;
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    };
});
