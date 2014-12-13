var studentRoster = angular.module('studentRoster', []);

studentRoster.config(function($routeProvider){
  $routeProvider
    .when('/'
    {
      controller: 'StudentsCtrl',
      templateUrl: 'views/Students.html'
    })

});
