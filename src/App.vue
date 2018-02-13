<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import axios from 'axios'
import myHeader from './common/common-header'
import myFooter from './common/common-footer'
export default {
  components: {
    myHeader: myHeader,
    myFooter: myFooter
  },
  data(){
    return{

    }
  },
  created() {
    // axios({
    //   method:'get',
    //   url:'http://10.173.41.182:8080/event/user/'
    // })
    //   .then(function(response) {
    //     console.log(response)
    //     if(response.data) {
    //       if(response.data.code === '0000') { //已登陆状态
    //
    //       }else {
    //
    //       }
    //     }
    //   });
  },
  methods: {

  },
}
</script>

<style>
  body {
    padding-top: 59px;
  }
</style>
