<template lang="">
  <header class="mb-5">
    <nav class="flex justify-between">
      <div class="left-side">
        <button type="button" class="dropdown">
          <FontAwesomeIcon :icon="fas.faChevronDown" />
        </button>
      </div>
      <div class="mid">
        <div class="toggle-con">
          <div
            class="inner bg-neutral-950 rounded-full flex w-32 justify-between"
          >
            <button
              type="button"
              class="song-btn text-base capitalize rounded-full px-2"
            >
              song
            </button>
            <button type="button" class="video-btn text-base capitalize px-2">
              video
            </button>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="inner w-20 flex justify-between">
          <button type="button" class="cast-btn">
            <i class="fa-brands fa-chromecast"></i>
          </button>
          <button class="options-btn">
            <FontAwesomeIcon :icon="fas.faEllipsisV" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    return { fas };
  },
};
</script>
<style lang=""></style>
