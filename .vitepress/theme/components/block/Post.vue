<script setup lang="ts">
import { data as posts } from "../../helper/posts.data.mjs";
import { useLastPost } from "../../hooks/useLastBlog";
const lastPost = useLastPost("Note", posts);
</script>

<template>
  <a
    class="ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
    :href="lastPost.url"
  >
    <div>
      <div
        class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl"
      >
        {{ lastPost.title }}
      </div>
      <div class="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        {{ lastPost.description }}
      </div>
    </div>
    <div class="mt-8">
      <img
        class="rounded-2xl group-hover:ring-white/20 duration-300 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10 object-cover"
        :src="lastPost.cover"
        :alt="lastPost.title"
      />
    </div>
  </a>
</template>
