export default class ChatController {
    constructor ($rootScope, $state) {
        this.$rootScope = $rootScope
        this.$state = $state
        this.data = {
            nickname: '',
            idade: ''
        }
    }

    getIn() {
        this.$rootScope.dados.push(this.data)
        this.$state.go('chat')
    }
}