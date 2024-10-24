<template lang="">
  <div class="shr-btns-con">
    <span
      class="shr-tick flex flex-nowrap w-24 bg-gray-700 bg-opacity-40 py-1 px-2 rounded-full gap-2 justify-center"
    >
      <button type="button" class="like-btn">
        <FontAwesomeIcon :icon="fas.faShare" />
      </button>
      <span>share</span>
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
