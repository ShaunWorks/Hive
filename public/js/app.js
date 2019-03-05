let chatBox = new Vue({
    el: "#chat-box",
    data: {
        message: "Nice Vue!"
    }
})

Vue.component("list-item", {
    props: ['name'],
    template: '<button v-on:click="sayHi" type="button" class="list-group-item list-group-item-action px-1">{{name}}</button>',
    methods: {
        sayHi: function () {
            chatBox.message = this.name;
        }
    }
})

new Vue({
    el: '#hive-nav',
    data: {
        items: ["banana", "orange", "apple", "fdaff", "adfadf", "fdsfasf", "adfdafawf", "dfaf", "Fsdfasfd", "daffafd", "fadsffa", "fadfdf", "fadsfafdaf", "dVvvcvzv"]
    }
})