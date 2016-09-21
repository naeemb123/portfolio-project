app.factory('data', [function(){
  var data = {
    "suggestions": [
      {
        "message": "Free pizza at club meetings!",
        "from": "UniLad",
        "upvotes": 9,
        "comments": [],
        "commentsPopularity": 0
      },
      {
        "message": "I want to learn how to create Web applications using AngularJS, Who's with me?",
        "from": "Naeem",
        "upvotes": 25,
        "commentsPopularity": 2,
        "comments": [
          {
            "Cmessage": "Dude! this is exactly what I wanna do :D. AngularJS > My acting Career",
            "from": "Will Smith"
          },
          {
            "Cmessage": "Its so Awesome",
            "from": "Google"
          }
        ]
      },
      {
        "message": "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        "from": "Deep Guy",
        "upvotes": 6,
        "commentsPopularity": 1,
        "comments": [
          {
            "Cmessage": "Bro...Thats deep",
            "from": "Inspired Dude"
          }
        ]
      }
    ]
  }


  return data;
}]);
