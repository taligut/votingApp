var votingApp = angular.module("votingApp", ["ngRoute"]);

// router
votingApp.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "/landingPage.html",
    controller: "landingPageCtrl"
  }) 
  .when("/voteList", {
    templateUrl: "app/voteList/voteList.html",
    controller: "voteListCtrl"
  })
  .when("/specificVote", {
    templateUrl: "app/specificVote/specificVote.html",
    controller: "specificVoteCtrl"
  }) 
});

