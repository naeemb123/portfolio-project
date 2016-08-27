app.directive('appComment', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: '/js/directives/commentForm.html',
    link: function(scope, elem, attr){

      scope.Title = "Submit Your Comment";

      console.log(scope);

      scope.addComment = function(){
        if (typeof scope.comments.Cmessage == "undefined" | scope.comments.Cmessage == ''){
          scope.errorCommentCheck = "Woops! You forgot to enter your Comment!";
          return;
        }
        else if (typeof scope.comments.from == "undefined" | scope.comments.from == '') {
          scope.errorNameCheck = "Woops! You forgot to enter your name";
          return;
        }
        else {
            scope.info.comments.push({
              Cmessage: scope.comments.Cmessage,
              from: scope.comments.from
            });
            scope.info.commentsPopularity += 1;
        }
    }


    }
  }
});
