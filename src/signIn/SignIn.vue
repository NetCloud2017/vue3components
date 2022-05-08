<template>
  <div class="loginForm">
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
  methods: {
    onBlur(val) {
      console.log("2323", val);
    },
  },
};
</script>

<style></style>
