'use strict';

angular.
  module('userList').
    component('userList',{
      templateUrl: 'users/userfrag.html',
      controller: function UserListController($http){
        var self =this;
        this.random=function(){
          var num = Math.random();
          return num;
        };
        $http.get("users/users.json").then(function(response){
          self.users = response.data;
        });
      /*  this.users = [{name: 'Travis', password: "password", loggedIn:false},
                     {name: 'Chris', password:"password", loggedIn:false},
                     {name: 'Lonny', password:"password", loggedIn:false},
                     {name: 'Blake', password:"password", loggedIn:false}];*/
      }

    });
