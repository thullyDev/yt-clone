<script>
import Thumbs from "@/components/Thumbs.vue";
import ActionBtns from "@/components/Actions/ActionBtns.vue";
import Tabs from "@/components/Audio/Tabs.vue";
import { useSongsStore } from "@/stores/songs";
// import { useAppStore } from "@/stores/app";

export default {
  components: {
    Thumbs,
    ActionBtns,
    Tabs,
  },
  async setup() {
    // const appStore = useAppStore();
    const songsStore = useSongsStore();
    const response = await songsStore.getSongs();

    if (response == true) songsStore.loadFirstSong();

    return { songsStore };
  },
};
</script>

<template>
  <main>
    <div class="main-content">
      <Thumbs />
      <ActionBtns />
      <Tabs />
      {{ songsStore.songs }}
    </div>
  </main>
</template>
