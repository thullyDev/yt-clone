<template lang="">
  <div class="audio-con flex flex-col justify-center items-center">
    <div class="inner-audio-con">
      <audio class="audio" ref="audio_ele">
        <source :src="songsStore.audioUrl" type="audio/ogg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
    <div class="outer-controls-con mt-5 text-2xl">
      <div class="inner flex gap-10 justify-center items-center">
        <span>
          <button type="button" class="shuffle-btn">
            <FontAwesomeIcon :icon="fas.faShuffle" />
          </button>
        </span>
        <span
          ><button @click="playPrevSong" type="button" class="backward">
            <FontAwesomeIcon :icon="fas.faBackward" /></button
        ></span>
        <span
          ><button
            @click="toggleAudio"
            type="button"
            class="play text-4xl bg-white text-black w-20 h-20 rounded-full flex justify-center items-center"
          >
            <FontAwesomeIcon v-if="!isPlaying" :icon="fas.faPlay" />
            <FontAwesomeIcon v-else :icon="fas.faPause" /></button
        ></span>
        <span
          ><button @click="playNextSong" type="button" class="forward">
            <FontAwesomeIcon :icon="fas.faForward" /></button
        ></span>
        <span
          ><button type="button" class="repeat">
            <FontAwesomeIcon :icon="fas.faRepeat" /></button
        ></span>
      </div>
    </div>
    <div class="tabs w-full mt-24">
      <nav class="tabs-toggle flex justify-between w-full text-base my-5">
        <span class="upnext-tab">
          <button type="button" class="capitalize upnext">up next</button>
        </span>
        <span class="lyrics-tab">
          <button type="button" class="capitalize lyrics text-gray-500">
            lyrics
          </button>
        </span>
        <span class="related-tab">
          <button type="button" class="capitalize related">related</button>
        </span>
      </nav>
    </div>
  </div>
</template>
<script>
import { useAudio } from "@/composables/audio";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useSongsStore } from "@/stores/songs";
import { useLoadingStore } from "@/stores/loading.js";
import { useAppStore } from "@/stores/app";

export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const audioSetup = useAudio();
    const songsStore = useSongsStore();
    const loadingStore = useLoadingStore();
    const appStore = useAppStore();

    const playNextSong = async () => {
      loadingStore.toggleLoading();
      songsStore.nextSong();
      const doneLoading = await audioSetup.loadAudio();
      audioSetup.playAudio();

      if (doneLoading == true) {
        loadingStore.toggleLoading();
      } else {
        appStore.goToErrorPage();
      }
    };

    const playPrevSong = async () => {
      loadingStore.toggleLoading();
      songsStore.prevSong();
      const doneLoading = await audioSetup.loadAudio();
      audioSetup.playAudio();

      console.log({ doneLoading });

      if (doneLoading == true) {
        loadingStore.toggleLoading();
      } else {
        appStore.goToErrorPage();
      }
    };

    return {
      fas,
      songsStore,
      playNextSong,
      playPrevSong,
      ...audioSetup,
    };
  },
};
</script>
