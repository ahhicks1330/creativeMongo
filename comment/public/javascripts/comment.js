angular.module('comment', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.comments = [];
            $scope.addComment = function() {
                if ($scope.user == undefined) {
                    $scope.user = "Dummy";
                }
                else if ($scope.user == "") {
                    $scope.user = "Dummy";
                }
                var newcomment = { User: $scope.user, Password: $scope.pass, title: $scope.formContent, upvotes: $scope.formItem };
                $scope.formContent = '';
                $scope.formItem = '';
                $scope.comments.push(newcomment);
            };
            $scope.getAll = function() {
                return $http.get('/comments').success(function(data) {
                    angular.copy(data, $scope.comments);
                });
            };
            $scope.getAll();

            $scope.addComment = function() {
                if ($scope.user == undefined) {
                    $scope.user = "Dummy";
                }
                else if ($scope.user == "") {
                    $scope.user = "Dummy";
                }
                var newcomment = { User: $scope.user, Password: $scope.pass, title: $scope.formContent, upvotes: $scope.formItem };
                $http.post('/comments', newcomment).success(function(data) {
                    $scope.comments.push(data);
                });
                $scope.formContent = '';
                $scope.formItem = '';
            };
            $scope.delete = function(comment) {
                $http.delete('/comments/' + comment._id)
                    .success(function(data) {
                        console.log("delete worked");
                    });
                $scope.getAll();
            };
            $scope.restart = function() {
                location.reload();
            };

        }

    ]);