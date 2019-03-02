'use strict';

angular.
  module('contactList').
  component('contactList', {
    templateUrl: 'contact-list/contact-list.template.html',
    controller: ['$http', function ContactList($http) {
      var self = this;

      $http.get('contacts/contacts.json').then(function(response) {
        self.contacts = response.data;
      });
    }]
  });
