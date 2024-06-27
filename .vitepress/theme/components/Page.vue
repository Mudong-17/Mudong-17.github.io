<script setup lang="ts">
import { useData } from "vitepress";
import Icon from "./Icon.vue";
const { frontmatter } = useData();
</script>
<template>
  <div class="flex items-center justify-between mt-4">
    <a
      v-if="frontmatter.prev"
      class="h-14 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl px-4 flex items-center gap-x-4 max-w-32"
      :href="frontmatter.prev.link"
    >
      <Icon name="arrow-narrow-left" class="text-primary dark:text-white" />
      <span class="truncate">{{ frontmatter.prev.text }}</span>
    </a>
    <a
      v-if="frontmatter.next"
      class="h-14 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl px-4 flex items-center gap-x-4 max-w-32"
      :href="frontmatter.next.link"
    >
      <Icon name="arrow-narrow-right" class="text-primary dark:text-white" />
      <span class="truncate">{{ frontmatter.prev.text }}</span>
    </a>
  </div>
</template>
