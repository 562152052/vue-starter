 module.exports = {
     url: "/news/index",
     response: function(req, res) {
         res.json([
             { title: 'Core Docs', href: 'https://vuejs.org' },
             { title: 'Forum', href: 'https://forum.vuejs.org' },
             { title: 'Community Chat', href: 'https://chat.vuejs.org' },
             { title: 'Twitter', href: 'https://twitter.com/vuejs' },
             { title: 'Docs for This Template', href: 'http://vuejs-templates.github.io/webpack/' }
         ])
     }
 }