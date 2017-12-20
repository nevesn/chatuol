import angular from 'angular'
export default class ChatController {
    constructor ($rootScope, $state) {
        this.$rootScope = $rootScope
        this.$state = $state
        this.messages = this.$rootScope.chat
        this.dados = this.$rootScope.dados
        this.description = ''
        console.log('usuario:', $rootScope.dados)
    }
    submit () {
        let msg = {
            description: angular.copy(this.description),
            owner: this.$rootScope.currentUser
        }
        this.description = ''
        this.$rootScope.chat.push(msg)
    }
   
}


