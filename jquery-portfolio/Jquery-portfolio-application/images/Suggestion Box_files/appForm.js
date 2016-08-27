app.directive('appForm', ['$location',function(location){
  return {
    restrict: 'E',
    scope: {
      info: '=',
      information: '='
    },
    templateUrl: 'js/directives/formTemplate.html',
    link: function(scope, elem, attr){
      scope.errorNameCheck = "";
      scope.errorSuggestionCheck = "";

      scope.addSuggestion = function(){
        console.log(scope.message);
        console.log(scope.from);
        if (typeof scope.message == "undefined" | scope.message == ''){
          scope.errorSuggestionCheck = "Woops! You forgot to enter your suggestion!";
          console.log(scope.errorSuggestionCheck)
          return;
        }
        else if (typeof scope.from == "undefined" | scope.from == '') {
          scope.errorNameCheck = "Woops! You forgot to enter your name";
          return;
        }
        else {
            scope.info.push({
              message: scope.message,
              from: scope.from,
              upvotes: 0,
              comments: [],
              commentsPopularity: 0
            })
            scope.messsage = "";
            scope.from = "";
        }
    }
  }
}
}]);
