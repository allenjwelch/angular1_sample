'use strict';

// Define the `ng-app` module
var app = angular.module('ng-app', []);

// Define the `Table` controller on the `ng-app` module
app.controller('ContactList', function ContactList($scope) {
  // let sampleData; 

  // fetch('/sample.json')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(myJson) {
  //     sampleData = myJson;
  //     console.log(sampleData.AddressBook.Contact); 
  //     // sampleData = JSON.stringify(myJson);
  //   });
    
    $scope.contacts = 
    [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];

});
