import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoadingStore = defineStore("loading", () => {
  const isloading = ref(false);
  const toggleLoading = () => {
    isloading.value = !isloading.value;
  };

  return { toggleLoading, isloading };
});
