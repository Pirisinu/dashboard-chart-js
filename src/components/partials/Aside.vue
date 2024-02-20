<script>
import store from '../partials/data/store';
export default {
  name: 'Aside',
  components: {},
  props: {},
  data() {
    return {
      store
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<template>
  <aside class="px-3 pt-4 text-light">
    <h4><strong>Dashbool</strong></h4>

    <div class="user d-flex align-items-center my-4 ">
      <div class="user-logo h-100 border border-4 border-light ">
        <img class="" src="../../../public/img/avatar_1.jpg" alt="">
      </div>
      <div class="user-welcome d-flex justify-content-center ms-3 flex-column">
        <h5 class="mb-0 line">Welcome</h5>
        <p class="mb-0"> <strong>{{ store.userName }} {{ store.userSurname }}</strong></p>
      </div>
    </div>

    <div class="general">
      <h4>General</h4>
      <ul class="list-unstyled">
        <li><i class="fa-solid fa-home"></i>Home</li>
        <li><i class="fa-solid fa-map"></i>Maps</li>
        <li><i class="fa-solid fa-gear"></i>Config</li>
        <li><i class="fa-solid fa-envelope"></i>Contacts</li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  aside{
    width: 15%;
    min-height: 100vh;
    background-color: #2A4054;

    .user{
      .user-logo{
        height: 60px;
        width: 60px;
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

    .general{
      ul{
        li{
          margin: 20px 0;
          font-size: 1.3rem;
          i{
            margin-right: 20px;
          }
        }
      }
    }
  }
</style>
