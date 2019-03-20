module.exports = {
    url: "/news/world",
    response: function(req, res) {
        res.json([
            { title: 'vue-router', href: 'http://router.vuejs.org/' },
            { title: 'vuex', href: 'http://vuex.vuejs.org/' },
            { title: 'vue-loader', href: 'http://vue-loader.vuejs.org/' },
            { title: 'awesome-vue', href: 'https://github.com/vuejs/awesome-vue' }
        ])
    }
}