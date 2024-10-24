import { ref, useTemplateRef } from "vue";

export function useAudio() {
  const audioEle = useTemplateRef("audio_ele");
  const isPlaying = ref(false);

  //   const changeAudioSource = () => {
  //     // audioEle.a
  //   };

  const playAudio = () => {
    audioEle.value.play();
    isPlaying.value = true;
  };

  const pauseAudio = () => {
    audioEle.value.pause();
    isPlaying.value = false;
  };

  const toggleAudio = () => {
    const isPaused = audioEle.value.paused;
    isPaused ? playAudio() : pauseAudio();
  };

  const loadAudio = async () => {
    audioEle.value.load();
    const loaderIntervalResponse = await loaderInterval();

    return loaderIntervalResponse;
  };

  const loaderInterval = () => {
    return new Promise((resolve, _) => {
      const intervalId = setInterval(() => {
        if (audioEle.value.readyState > 0) {
          clearInterval(intervalId);
          resolve(true);
        }
      }, 500); // .5s
    });
  };

  return { toggleAudio, playAudio, pauseAudio, loadAudio, isPlaying };
}
