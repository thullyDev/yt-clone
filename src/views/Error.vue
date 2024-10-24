<script>
import { useAppStore } from "@/stores/app";

export default {
  setup() {
    const appStore = useAppStore();
    return { appStore };
  },
};
</script>

<template>
  <main>
    <div class="main-content">
      <div class="error flex flex-col items-center mt-36 gap-5">
        <p class="error-label text-3xl font-bold">
          Opps, something went wrong!
        </p>
        <p class="error-message text-2xl">{{ appStore.errorMsg }}</p>
      </div>
    </div>
  </main>
</template>
