<script setup lang="ts">
import Header from "../components/Header.vue";
import Page from "../components/Page.vue";
import { Content, useData } from "vitepress";
const { frontmatter } = useData();
</script>

<template>
  <Header />
  <div
    class="ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"
  >
    <div
      class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl text-wrap"
    >
      {{ frontmatter.title }}
    </div>
    <Content class="text-primary dark:text-white vp-doc" />
  </div>
  <Page />
</template>
