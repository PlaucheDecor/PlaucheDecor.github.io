angular.module("etsyApp")
  .service("DecorService", ["$http", function ($http) {
    //Array where listingData and corresponding images will be pushed. 
    //  var baseUrl = "https://openapi.etsy.com/v2/";
    //  var shopUrl = "shops/Plauche/";
    //  var listingsUrl = "listings/";
    //  var apiKey = "api_key=87yw7tt8c9cnwmqx70gpmyaq"


    this.getListings = function () {
      return $http.jsonp("https://openapi.etsy.com/v2/shops/Plauche/listings/active.js?callback=JSON_CALLBACK&api_key=87yw7tt8c9cnwmqx70gpmyaq")
        .then(function (response) {
          return response.data;
        })
    };


    this.getTestImages = function () {
      return $http.get("https://openapi.etsy.com/v2/listings/255797703/images?api_key=87yw7tt8c9cnwmqx70gpmyaq")
        .then(function (response) {
          return response.data;
        })
    }

    //    this.getTestImages = function () {
    //      return $http.jsonp("https://openapi.etsy.com/v2/listings/255797703/images?callback=JSON_CALLBACK&api_key=87yw7tt8c9cnwmqx70gpmyaq")
    //        .then(function (response) {
    //          return response.data;
    //        })
    //    }


}]);



//Gets shop 's info
//https: //openapi.etsy.com/v2/shops/Plauche?api_key=87yw7tt8c9cnwmqx70gpmyaq

//Gets shop's listings
//https: //openapi.etsy.com/v2/shops/Plauche/listings/active?api_key=87yw7tt8c9cnwmqx70gpmyaq

//https://openapi.etsy.com/v2/listings/listingid/images?api_key=87yw7tt8c9cnwmqx70gpmyaq
//Gets listing's images