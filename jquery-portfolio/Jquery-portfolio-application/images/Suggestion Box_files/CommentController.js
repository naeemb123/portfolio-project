app.controller('CommentController', ['$scope', '$routeParams', 'data', function($scope, $routeParams, data){
  $scope.post = data.suggestions[$routeParams.id];
  $scope.currentPostIndex = parseInt($routeParams.id);
  console.log($scope.currentPostIndex);
}]);
