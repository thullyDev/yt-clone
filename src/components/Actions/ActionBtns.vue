<template lang="">
  <div class="action-btns-con">
    <div class="inner-con flex gap-5 overflow-auto scrollable-nobg my-5">
      <LikesNdislike />
      <Comments />
      <Download />
      <Save />
      <Share />
      <Radio />
    </div>
  </div>
</template>
<script>
import LikesNdislike from "@/components/Actions/LikesNdislike.vue";
import Comments from "@/components/Actions/Comments.vue";
import Download from "@/components/Actions/Download.vue";
import Save from "@/components/Actions/Save.vue";
import Share from "@/components/Actions/Share.vue";
import Radio from "@/components/Actions/Radio.vue";

export default {
  components: {
    LikesNdislike,
    Comments,
    Download,
    Save,
    Share,
    Radio,
  },
  setup() {},
};
</script>
<style lang=""></style>
