import { ref } from "vue";

export default function (key) {
    let result = ref(false);
    document.addEventListener(
        "keyup",
        function (e) {
            e.preventDefault() && e.cancelable();
            e.stopPropagation();
            result.value = key === e.key;
        },
        false
    );
    return result;
}
