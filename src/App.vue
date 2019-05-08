<template>
  <div id="app">
    <Input @getIpFromInput="getIp"></Input>
    <div class="text">
      <p>IP地址详情:</p>
    </div>
    <div>
      <el-table :data="result" class="table">
        <el-table-column prop="ip" label="IP地址"></el-table-column>
        <el-table-column prop="address" label="物理地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Input from "./components/IpInput"

export default {
  name: 'app',
  components: {
    Input
  },
  data: function() {
    return {
      result: []
    }
  },
  methods: {
    getIp: function(ip) {
      let url = "https://api.ttt.sh/ip/qqwry/"+ip
      this.axios.get(url).then((response)=> {
        this.checkResponse(response.data)
      })
    },
    checkResponse: function(res) {
      if (res.code === 200) {
        this.showInfo(res)
      } else {
        this.errorNotice(res)
      }
    },
    showInfo: function(info) {
      this.result.push(info)
    },
    errorNotice: function(res) {
      this.$notify.error({
        title: "错误",
        message: res.error
      })
    }
  }
}
</script>

<style scoped>
  .text {
    width: 50%;
    margin: 1% auto;
  }
  .table {
    width: 50%;
    margin: 0 auto;
  }
</style>
