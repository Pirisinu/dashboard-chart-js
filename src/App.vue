<script>
import Aside from './components/partials/Aside.vue';
export default {
  name: 'App',
  components: {
    Aside
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
    <main>lorem5000</main>
 </div>
</template>

<style lang="scss" scoped>
main{
  width: calc(100% - 250px);
}
</style>
