<template>
    <div class="loginPage">
        <a-form :data="form">
            <form-item :label="'用户名'">
                <a-input v-model:value="form.userName" />
            </form-item>
            <form-item :label="'密码'">
                <a-input v-model:value="form.password" />
            </form-item>
            <form-item :label="'电话号码'">
                <a-input @blur="onBlur" v-model:value="form.phoneNo" />
            </form-item>

            <form-item :label="'验证码'">
                <a-input v-model:value="form.verificationCode" />
            </form-item>
            <form-item>
                <el-checkbox v-model="form.agreeContract" />
                <el-button class="contractText" type="text" @click="showContract = true">
                    用户协议
                </el-button>
            </form-item>
        </a-form>
    </div>
</template>

<script setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
    userName: "",
    password: "",
    emailAddress: "",
    phoneNo: "",
    verificationCode: "",
    agreeContract: false,
});

// const onSubmit = () => {
//   console.log("submit!");
// };
</script>
<style lang="less" scoped>
.loginPage {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/imgs/futures_login_backgroundImg.jpeg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contractText {
    margin-left: 10px;
}
</style>
