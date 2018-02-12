<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './common/header'
export default {
  components: {myHeader: myHeader},
  data(){
    return{

    }
  },
  methods: {

  },
}
</script>

<style>
  .wrapper {
    width:100%;
    display: flex;
    height: 100%;
    list-style: none;
    text-decoration: none;
  }
  body {
    padding-top: 50px;
  }
</style>
