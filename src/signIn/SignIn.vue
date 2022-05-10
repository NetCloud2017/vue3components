<template>
  <div class="loginPage">
    <a-form :data="form">
      <a-input @blur="onBlur" v-model:value="phoneNo" />
      <a-input v-model:value="email" />
      <a-input v-model:value="password" />
      <a-input v-model:value="userName" />
      <a-input v-model:value="emailAddress" />
      <a-input v-model:value="verificationCode" />
      <a-input v-model:value="agreeContract" />
      
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
