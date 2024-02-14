<script>
import Aside from './components/partials/Aside.vue';
import Header from './components/partials/Header.vue';
export default {
  name: 'App',
  components: {
    Aside,
    Header
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
      lorem5000
    </main>
 </div>
</template>

<style lang="scss" scoped>
main{
  width: calc(100% - 250px);
  box-shadow: 10px 20px 40px 20px;
}
</style>
