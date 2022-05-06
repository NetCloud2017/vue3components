<template>
  <div class="loginForm">
    <a-form>
      <a-input v-model="phoneNo" />
      <a-input v-model="email" />
      <a-input v-model="password" />
      <a-input v-model="userName" />
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
      email: '',
      phoneNo: '',
    };
  },
};
</script>

<style></style>
