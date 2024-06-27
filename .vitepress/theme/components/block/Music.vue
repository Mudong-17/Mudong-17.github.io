<script setup lang="ts">
import { useData } from "vitepress";
import { reactive } from "vue";
const { theme } = useData();
const musics = theme.value.musics;
const music = reactive(musics[0]);
</script>

<template>
  <div
    class="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 bg-white dark:bg-secondary gap-4"
  >
    <div class="text-xl text-primary dark:text-white lg:text-2xl mt-6">
      {{ music.title }}
    </div>
    <div class="text-zinc-500 dark:text-zinc-400">
      {{ music.artist }}
    </div>
    <audio controls autoplay="true" preload="auto">
      <source :src="music.url" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>
