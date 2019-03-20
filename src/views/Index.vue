<template>
  <div class="hello">
     <m-title :text="msg"/>
    <ul>
      <li  v-for="item in docs"  >
        <a
          :href="item.href"
          target="_blank"
        >
          {{item.title}}
        </a>
      </li>       
    </ul>
    <h2 @click="getPlugin" >click me</h2>
    <ul>
      <li v-for="item in plugin" >
        <a
          :href="item.href"
          target="_blank"
        >
          {{item.title}}
        </a>
      </li>       
    </ul> 
  </div>
</template>

<script>
import mTitle from "@/components/Title";
import { mapActions, mapState } from "vuex";

export default {
  name: "index",

  components: {
    mTitle
  },

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      plugin: []
    };
  },
  methods: {
    ...mapActions(["getDocs"]),

    async getPlugin() {
      let data = await this.$http("/news/world");
      this.plugin = data;
    }
  },

  computed: {
    ...mapState(["docs"])
  },

  mounted() {
    this.getDocs();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
