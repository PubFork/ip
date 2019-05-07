<template>
  <div id="input">
    <el-input
      type="text"
      placeholder="请输入IP地址，按回车进行查询"
      maxlength="15"
      v-model="ipaddress"
      @keyup.enter.native="submit"
      @keyup.delete.native="delNotice"
      clearable
    ></el-input>
    <p type="danger" :style="{ display: isDisplay}" class="notice">请输入有效的IP地址</p>
  </div>
</template>

<script>
export default {
  name: "input",
  data: function() {
    return {
      ipaddress: "",
      isDisplay: "none"
    };
  },
  methods: {
    submit: function() {
        if (this.isValidIP(this.ipaddress) == true) {
            this.delNotice()
            this.$emit("getIpFromInput", this.ipaddress);
        } else {
            this.errorNotice()
        }
    },
    isValidIP: function(ip) {
        var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
        return reg.test(ip);
    },
    delNotice: function() {
        this.isDisplay = "none"
    },
    errorNotice: function() {
        this.isDisplay = "block"
    }
  }
};
</script>


<style scoped>
#input {
  width: 50%;
  margin: 10% auto 0;
}
.notice {
    margin: 1% 0 0;
    color: red;
}
</style>
