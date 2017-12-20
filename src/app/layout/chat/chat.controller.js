export default class ChatController {
    constructor ($rootScope, $state) {
        this.$rootScope = $rootScope
        this.$state = $state
        this.messages = this.$rootScope.chat
        this.dados = this.$rootScope.dados
        var historico = []
        console.log('usuario:', $rootScope.dados)
    }
    submit () {
        let msg = this.description
        this.$rootScope.chat.push(msg)
        historico.push(this.dados)
        this.$state.go('home')
        console.log('messages:', this.messages)
        console.log('usuario:', this.dados.data.nickname)
    }
   
}


