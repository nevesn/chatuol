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
        this.$rootScope.currentUser = this.data.nickname
        this.$state.go('chat')
    }
}