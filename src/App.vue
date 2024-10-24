<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Loader from "@/components/Loader.vue";
import { useSongsStore } from "./stores/songs";
const songsStore = useSongsStore();
</script>

<template>
  <div class="outer-morph fixed z-0 w-full h-full opacity-70 top-0">
    <div class="inner-morph w-full h-full relative">
      <img
        :src="songsStore.imageUrl"
        alt="song background image"
        class="w-full h-full"
      />
      <div class="glass-morph gm-con border absolute w-full h-full top-0"></div>
      <div class="bg-grad w-full h-full top-0 absolute"></div>
    </div>
  </div>
  <div
    class="content w-full h-full m-auto pt-10 px-5 pb-16 z-10 absolute w-full h-full"
  >
    <Header></Header>
    <Suspense>
      <RouterView #default />
      <template #fallback>
        <div
          class="loader w-full h-full fixed flex justify-center items-center top-0 left-0 bg-black bg-opacity-70"
        >
          <div class="inner-loader w-36 h-36 flex justify-center items-center">
            <Loader />
          </div>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style>
:root {
  --p-bg-color: #2e1702;
  /* --s-bg-color: #5e5c5a; */
}
.glass-morph {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  /* border-radius: 12px; */
  /* border: 1px solid rgba(255, 255, 255, 0.125); */
}

.bg-grad {
  background: rgb(18, 18, 20);
  background: linear-gradient(
    180deg,
    rgba(18, 18, 20, 0) 51%,
    rgba(16, 17, 17, 1) 100%
  );
}
</style>
