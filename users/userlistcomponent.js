'use strict';

angular.
  module('userList').
    component('userList',{
      templateUrl: 'users/userfrag.html',
      controller: function UserListController(){
        this.users = [{name: 'Travis', password: "password", loggedIn:false},
                     {name: 'Chris', password:"password", loggedIn:false},
                     {name: 'Lonny', password:"password", loggedIn:false},
                     {name: 'Blake', password:"password", loggedIn:false}];
      }

    });
