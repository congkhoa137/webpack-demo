var myApp = angular.module('helloworld', ['ui.router']);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
  var helloState = {
    name: 'hello',
    controllerAs: 'vm',
    controller: helloCtrl,
    url: '/hello',
    template: '<h3 ng-click="vm.tele();">hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);

  helloCtrl.$inject = ['$state'];
  function helloCtrl($state){
    let self = this;
    console.log(12);

    self.tele = function () {
      $state.go('about');
    }
  }
}
myApp.config(config);
