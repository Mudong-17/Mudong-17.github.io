<script setup lang="ts">
import { useData } from "vitepress";
const { theme } = useData();
</script>

<template>
  <div
    class="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"
  >
    <div class="relative flex items-center gap-x-4">
      <img
        class="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
        :src="theme.profile.avatar"
        :alt="theme.profile.name"
      />
      <div div="text-sm leading-6">
        <div class="font-semibold text-primary dark:text-white">
          <a href="#">
            {{ theme.profile.name }}
            <span class="absolute inset-0"></span>
          </a>
        </div>
        <div class="text-zinc-500 dark:text-zinc-400">
          {{ theme.profile.description }}
        </div>
      </div>
    </div>
    <div
      v-if="theme.profile.motto"
      class="text-2xl mt-6 font-medium lg:text-3xl text-primary dark:text-white"
    >
      {{ theme.profile.motto }}
    </div>
    <div
      className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl"
    >
      <template v-for="(summary, index) in theme.profile.summary">
        <div>
          {{ summary }}
        </div>
        <br v-if="index !== theme.profile.summary.length - 1" />
      </template>
    </div>
  </div>
</template>
