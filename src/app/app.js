import angular from 'angular'
import uiRouter from '../../node_modules/@uirouter/angularjs/release/angular-ui-router.min.js'

import AppBoot from './app.boot.js'

import ChatController from './layout/chat/chat.controller.js'
import HomeController from './layout/home/home.controller.js'


let app = () => {
  return {
    template: require('./app.html')
  }
}

const MODULE_NAME = 'app'

angular.module(MODULE_NAME, [uiRouter])
.config(function ($stateProvider) {
  let chatState = {
    name: 'chat',
    url: '/chat',
    template: require('./layout/chat/chat.template.html'),
    controller: ChatController,
    controllerAs: 'vm'
  }
  let homeState = {
    name: 'home',
    url: '/home',
    template: require('./layout/home/home.template.html'),
    controller: HomeController,
    controllerAs: 'vm'
  }
  $stateProvider
  .state(chatState)
  .state(homeState)
})


.directive('app', app)
.run(['$rootScope', AppBoot])
.controller('ChatController', ['$rootScope', '$state', ChatController])
.controller('HomeController', ['$rootScope', '$state', HomeController])
export default MODULE_NAME