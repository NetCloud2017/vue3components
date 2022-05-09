<template>
  <div class="loginPage">
    <a-form>
      <a-input @blur="onBlur" v-model:value="phoneNo" />
      <a-input v-model:value="email" />
      <a-input v-model:value="password" />
      <a-input v-model:value="userName" />
    </a-form>
  </div>
</template>

<script>
export default {
  name: "sign-in",
  data: function () {
    return {
      userName: "",
      password: "",
      email: "",
      phoneNo: "",
    };
  },

  mounted() {
    console.log(this, "uux");
  },
  beforeUpdate() {
    console.log(this.userName, 'uunnnnn');
  },
  methods: {
    onBlur(val) {
      console.log("2323", val);
    },
  },
};
</script>

<style lang="less" scoped>
  .loginPage {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/imgs/futures_login_backgroundImg.jpeg');
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>> 
