angular.module('docketApp')
  .controller('SideBarCtrl', ["$scope", "$state", "eventService", "userInfo", function ($scope, $state, eventService, userInfo) {

  // $scope.type = "<h1>type in here</h1>";

  $scope.userInfo = userInfo;

  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  // Displays events to the search results state
  $scope.getEvents = function() {
    eventService.search($scope.location, $scope.dt).success(function(data) {
      $state.go('dashboard.search_results');
    });
  };

  $scope.addFreeTime = function() {
    $state.go('dashboard.new_free_time');
  };
}]);