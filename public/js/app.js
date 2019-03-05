Vue.component("list-item", {
    props: ['name'],
    template: '<button v-on:click="changeHive" type="button" class="list-group-item list-group-item-action px-1">{{name}}</button>',
    methods: {
        changeHive: function () {
            chatBox.title = this.name;
        }
    }
})

let nav = new Vue({
    el: '#hive-nav',
    data: {
        query: "",
        items: ["banana", "orange", "apple"]
    },
    methods: {
        addHive: function () {
            this.items.push(this.query);
            this.query = "";
        }
    }
})

let chatBox = new Vue({
    el: "#chat-box",
    data: {
        title: "Nice Vue!",
        message: "",
        chat: ["", "jkldfja"]
    },
    methods: {
        postMessage: function () {
            this.chat.push(this.message);
            this.message = "";
        }
    }
})