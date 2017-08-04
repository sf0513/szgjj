<template>
  <div>
    <div>msg: {{msg}}</div>
    <button @click='fn("../123")'>点击</button>
     </div>
</template>
<style scoped>

</style>
<script>
  import Axios from 'axios'
  export default{
    data(){
      return {
        msg: 'hello Axios',
      }
    },
    components: {},
    methods: {
      fn: function () {
        var _this = this;
        Axios.get("./mock/demo.json")
          .then(function (rsp) {
            _this.msg = rsp.data.name
          })
      }
    }
  }
</script>