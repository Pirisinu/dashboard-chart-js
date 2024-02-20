<script>
import Aside from './components/partials/Aside.vue';
import Header from './components/partials/Header.vue';
import Main from './components/partials/Main.vue';
export default {
  name: 'App',
  components: {
    Aside,
    Header,
    Main
  },
  props: {},
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>

<template>
 <div class="d-flex h-100 w-100">
    <Aside />
    <main>
      <Header />
      <Main/>
    </main>
 </div>
</template>

<style lang="scss" scoped>
main{
  width: calc(100% - 15%);
  box-shadow: 10px 20px 40px 20px;
}
</style>
