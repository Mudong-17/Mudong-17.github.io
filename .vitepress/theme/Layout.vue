<script setup lang="ts">
import { useData } from "vitepress";
const { page, frontmatter } = useData();

import Home from "./pages/Home.vue";
import Article from "./pages/Article.vue";
</script>

<template>
  <div class="dark:bg-primary bg-zinc-200 m-h-screen">
    <section class="p-4">
      <Home v-if="frontmatter.home" />
      <Article v-else />
    </section>
  </div>
</template>
