app.controller('HomeController', ['$scope', 'data', function($scope, data, $mdDialog){
  $scope.helloWorld = "Hello, Naeem Rahman! You are using Anglular!";
  $scope.posts = data.suggestions;
  $scope.customFullscreen = false;


  $scope.upVote = function(post){
    console.log("I AM RUNNING CONTROLLER");
    post.upvotes += 1;
  }

  // $scope.showDialog = function(ev){
  //   $mdDialog.show({
  //     controller: DialogController,
  //     templateUrl: './js/directives/dialog-directive.html',
  //     parent: angular.element(document.body),
  //    targetEvent: ev,
  //    clickOutsideToClose:true,
  //    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  //   })
  // }


}]);
