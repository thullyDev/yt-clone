<template lang="">
  <div class="thumbs-con">
    <div class="image-con">
      <div class="thumb-con w-full justify-center flex">
        <div class="inner-thumb-con h-96 w-96 relative">
          <img
            :src="songsStore.imageUrl"
            alt="poster"
            class="thumb object-cover h-full w-full rounded-xl"
          />
          <div
            v-if="loadingStore.isloading"
            class="loader w-full h-full absolute flex justify-center items-center top-0 rounded-xl bg-black bg-opacity-85"
          >
            <div
              class="inner-loader w-36 h-36 flex justify-center items-center"
            >
              <Loader />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="thumb-text-con flex flex-col my-5 gap-2">
      <span class="title capitalize text-2xl font-bold">{{
        songsStore.title
      }}</span>
      <span class="type text-gray-300">{{ songsStore.subtitle }}</span>
    </div>
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";
import { useLoadingStore } from "@/stores/loading";
import { useSongsStore } from "@/stores/songs";

export default {
  components: {
    Loader,
  },
  setup() {
    const loadingStore = useLoadingStore();
    const songsStore = useSongsStore();

    return {
      loadingStore,
      songsStore,
    };
  },
};
</script>
<style lang=""></style>
