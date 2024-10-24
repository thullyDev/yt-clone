import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

export const useAppStore = defineStore("app", () => {
  const isThereError = ref(false);
  const errorMsg = ref("failed to authenticate");
  const router = useRouter();

  const goToErrorPage = () => {
    router.push({ name: "error" });
  };
  const setError = (_isThereError, msg) => {
    errorMsg.value = msg;
    isThereError.value = _isThereError;

    console.log({ isThereError: isThereError.value, msg });
  };

  watch(isThereError, (_isThereError) => {
    if (_isThereError == true) goToErrorPage();
  });

  return {
    isThereError,
    errorMsg,
    setError,
    goToErrorPage,
  };
});
