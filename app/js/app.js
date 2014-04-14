var broncoMailApp = angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'mgcrea.ngStrap']);

broncoMailApp.controller('BroncoMailController', function($scope) {
  $scope.recipients = [];
  $scope.recipients.push({"first": "Will", "last": "Tylko", "image": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1.0-1/c42.42.528.528/s160x160/945769_10201724687107185_1556230379_n.jpg", "mail":"Box Number: 2219"});
  $scope.recipients.push({"first": "Quintin", "last": "Smith", "image": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc1/t1.0-1/c170.50.621.621/s160x160/73850_520816517942470_1337473969_n.jpg", "mail": "Quintin has Bronco Delivery"});

  for (var i =0; i<100; i++) {
    $scope.recipients.push({"first": Faker.Name.firstName(), "last": Faker.Name.lastName(), 'image': Faker.Image.avatar()});
  }
  $scope.zoom = function(recipient) {
    $scope.modal = {"title": recipient.first + " " + recipient.last, "content": recipient.mail}
  }
});
