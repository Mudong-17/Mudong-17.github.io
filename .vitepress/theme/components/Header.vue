<script setup lang="ts">
import Icon from "./Icon.vue";
const back = () => {
  window.history.back();
};
</script>
<template>
  <div class="fixed left-0 right-0 z-999 px-4">
    <div
      class="h-14 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl px-8 flex items-center justify-between"
    >
      <div class="flex gap-x-4">
        <div
          class="w-10 h-10 dark:bg-white bg-primary flex items-center justify-center rounded-full cursor-pointer"
          @click="back()"
        >
          <Icon
            name="arrow-back-up"
            class="dark:text-primary text-white text-xl"
          />
        </div>
        <a
          href="/"
          class="w-10 h-10 dark:bg-white bg-primary flex items-center justify-center rounded-full"
        >
          <Icon name="home" class="dark:text-primary text-white text-xl" />
        </a>
      </div>
    </div>
  </div>
  <div class="h-14 mb-4"></div>
</template>
