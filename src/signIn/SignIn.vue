<template>
  <div class="loginPage">
    <a-form :data="form">
      <form-item :label="'用户名'">
        <a-input v-model:value="userName" />
      </form-item>
      <form-item :label="'密码'">
        <a-input v-model:value="password" />
      </form-item>
      <form-item :label="'电话号码'">
        <a-input @blur="onBlur" v-model:value="phoneNo" />
      </form-item>

      <form-item :label="'邮箱地址'">
        <a-input v-model:value="emailAddress" />
      </form-item>
      <form-item :label="'验证码'">
        <a-input v-model:value="verificationCode" />
      </form-item>
      <form-item :label="'用户协议'">
        <a-input v-model:value="agreeContract" />
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
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
