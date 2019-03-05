let app = new Vue({
    el: "#app",
    data: {
        message: "Nice Vue!"
    }
})

Vue.component("list-item", {
    props: ['name'],
    template: '<button type="button" class="list-group-item list-group-item-action px-1">{{name}}</button>'
})

new Vue({
    el: '#hive-nav',
    data: {
        items: ["banana", "orange", "apple", "fdaff", "adfadf", "fdsfasf", "adfdafawf", "dfaf", "Fsdfasfd", "daffafd", "fadsffa", "fadfdf", "fadsfafdaf", "dVvvcvzv"]
      }
})