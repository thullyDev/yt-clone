<template lang="">
  <div class="dl-btns-con">
    <span
      class="dl-tick flex flex-nowrap w-36 bg-gray-700 bg-opacity-40 py-1 px-3 rounded-full gap-2 justify-center"
    >
      <button type="button" class="like-btn">
        <FontAwesomeIcon :icon="fas.faDownload" />
      </button>
      <span>download</span>
    </span>
  </div>
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
