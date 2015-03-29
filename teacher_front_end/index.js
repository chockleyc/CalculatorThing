var App = angular.module('roomsApp', []);

App.controller('RoomsCtrl', function($scope, $http) {
  $http.get('myURL here')
       .then(function(res){
          $scope.rooms = res.data;                
        });
});