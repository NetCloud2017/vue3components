<template>
    <img :src="dogPic" />
    <div>{{ count }}</div>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
    async setup() {
        let { count } = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    count: 666,
                });
            }, 2000);
        });
        let { data } = await axios.get(
            // " https://dog.ceo/api/breed/spitz/japanese/images/random"
            "https://dog.ceo/api/breed/images" // error captrued
        );
        return {
            count,
            dogPic: data.message,
        };
    },
});
</script>

<style lang="scss" scoped></style>
