var app = angular.module("etsyApp", ["ngRoute"]);




app.controller("MainController", ["$scope", "DecorService", function ($scope, DecorService) {

  //  $scope.test = "If you can see this you have reached the controller";



}]);

app.controller("decorController", ["$scope", "DecorService", function ($scope, DecorService) {

  //  $scope.listings = "If you can see this you have reached the controller";


  DecorService.getListings().then(function (data) {
    $scope.listings = data.results;
  });

  DecorService.getTestImages().then(function (data) {
    $scope.listingImage = data.results[0].url_170x135;
  })




}]);