<script>
export default {
  name: 'Aside',
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<template>
  <aside class="px-3 pt-4 ">
    <h4 class="text-light"><strong>Dashbool</strong></h4>
    <div class="user d-flex">
      <div class="user-logo">
        <img class="" src="../../../public/img/avatar_1.jpg" alt="">
      </div>
      <div class="user-welcome text-light ms-3">
        <h5 class="mb-0">Welcome</h5>
        <p>Mario Rossi</p>
      </div>

    </div>
  </aside>
</template>

<style lang="scss" scoped>
  aside{
    width: 250px;
    min-height: 100vh;
    background-color: #2A4054;

    .user{

      .user-logo{
        width: 50px;
        height: 50px;
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
  }
</style>
