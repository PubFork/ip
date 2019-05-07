<template>
    <div id="info">
        <el-card shadow="hover">
            <p>IP : {{ Ip }}</p>
            <div>
            <p>地址：{{ Ipaddress }}</p>
            <el-button type="danger" icon="el-icon-delete" class="deleteButton"></el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "ipinfo",
    props: ["ip", "address"],
    data: function() {
        return {
            Ip: this.ip,
            Ipaddress: this.address
        }
    }
}
</script>

<style scoped>
    #info {
        width: 50%;
        margin: 10px auto;
    }
    .deleteButton {
        float: right;
        position:relative;
    }
</style>


