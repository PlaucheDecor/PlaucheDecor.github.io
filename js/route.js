angular.module("etsyApp")
  .config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "html/home.html"
      })
      .when(".io", {
        templateUrl: "html/home.html"
      })
      .when("/decor", {
        templateUrl: "html/decor.html"
      })
      .when("/custom", {
        templateUrl: "html/custom.html"
      })
      .when("/aboutMe", {
        templateUrl: "html/aboutMe.html"
      })
      .when("/home", {
        templateUrl: "html/home.html"
      })
      .when("/contact", {
        templateUrl: "html/contact.html"
      })

  })