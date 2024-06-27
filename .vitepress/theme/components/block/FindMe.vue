<script setup lang="ts">
import Icon from "../Icon.vue";
import { useData } from "vitepress";
const { theme } = useData();
</script>

<template>
  <div
    class="ring-1 lg:row-start-3 p-8 hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick flex flex-col gap-4 justify-around"
  >
    <div
      className="text-2xl font-medium lg:text-3xl text-primary dark:text-white"
    >
      Find Me
    </div>
    <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-4">
      <template v-for="(findme, index) in theme.findme" :key="index">
        <a
          class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
          :href="findme.disabled ? '#' : findme.url"
        >
          <Icon
            class="text-2xl group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50"
            :name="findme.icon"
          />
        </a>
      </template>
    </div>
  </div>
</template>
