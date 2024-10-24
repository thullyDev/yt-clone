import { defineStore } from "pinia";
import { ref } from "vue";

const BACKEND_URL = "http://localhost:3000";

export const useSongsStore = defineStore("songs", () => {
  const titleR = ref("");
  const imageUrlR = ref("");
  const subtitleR = ref("");
  const audioUrlR = ref("");
  const songs = ref([]);
  const currentSongIndex = ref(null);

  const changeSong = ({ title, subtitle, imageUrl, audioUrl }) => {
    titleR.value = title;
    imageUrlR.value = imageUrl;
    subtitleR.value = subtitle;
    audioUrlR.value = audioUrl;
  };

  const getSongs = async () => {
    try {
      const url = `${BACKEND_URL}/songs`;
      const response = await fetch(url);
      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error(error);
      setSongs([]);
      return false;
    }
    return true;
  };

  const setSongs = (_songs) => {
    songs.value = _songs;
  };

  const getNextIndex = () => {
    if (songs.value.length < 0) return null;
    if (currentSongIndex.value + 1 == songs.value.length) {
      // its at the end of the list
      return 0;
    }
    return currentSongIndex.value + 1;
  };
  const getPrevIndex = () => {
    if (songs.value.length < 0) return null;
    if (currentSongIndex.value == 0) {
      // its at the end of the list
      return songs.value.length - 1;
    }
    return currentSongIndex.value - 1;
  };

  const nextSong = () => {
    currentSongIndex.value = getNextIndex();
    if (!currentSongIndex.value) return;
    changeSong(songs.value[currentSongIndex.value]);
  };
  const prevSong = () => {
    currentSongIndex.value = getPrevIndex();
    if (!currentSongIndex.value) return;
    changeSong(songs.value[currentSongIndex.value]);
  };

  const loadFirstSong = () => {
    currentSongIndex.value = 0;
    if (songs.value.length > 0) {
      changeSong(songs.value[0]);
    }
  };

  return {
    loadFirstSong,
    setSongs,
    getSongs,
    nextSong,
    prevSong,
    title: titleR,
    subtitle: subtitleR,
    imageUrl: imageUrlR,
    audioUrl: audioUrlR,
  };
});
