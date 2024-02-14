<script>
import store from '../partials/data/store';
export default {
  name: 'Header',
  components: {},
  props: {},
  data() {
    return {
      store
    }
  },
  mounted() { },
  beforeDestroy() { },
  methods: {}
}
</script>

<template>
  <header class="d-flex align-items-center justify-content-between px-2">
    <a href="" class="btn-aside btn btn-secondary h-75 d-flex justify-content-center align-items-center "><i class="fa-solid fa-bars"></i></a>
    <div class="user d-flex align-items-center gap-3">
      <div class="name d-flex gap-2">
        <span>{{ store.userName }}</span>
        <span>{{ store.userSurname }}</span>
      </div>
      <div class="user-logo h-100 border border-4 border-light ">
        <img class="" src="../../../public/img/avatar_1.jpg" alt="">
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 60px;
  width: 100%;
  background-color: #EDEDED;
  box-shadow: 0px 0px 50px 0px;

  .user-logo{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
}
</style>
