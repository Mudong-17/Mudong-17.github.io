<script setup lang="ts">
import { data as posts } from "../../helper/posts.data.mjs";
import { useLastPost } from "../../hooks/useLastBlog";
const lastPost = useLastPost("Life", posts);
</script>

<template>
  <a
    class="lg:col-span-2 xl:col-span-1 flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary overflow-hidden shadow-xl dark:shadow-thick rounded-3xl p-8"
    :href="lastPost.url"
  >
    <div>
      <div
        class="flex flex-wrap gap-4"
        v-if="lastPost.download && lastPost.download.length > 0"
      >
        <template v-for="download in lastPost.download">
          <div
            class="flex items-center text-sm font-medium text-primary dark:text-white"
          >
            <Icon
              :name="download.icon"
              class="flex-none text-base stroke-current"
            />
            <span class="ml-2">{{ download.name }}</span>
          </div>
        </template>
      </div>
      <div
        class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mt-6 text-wrap"
      >
        {{ lastPost.title }}
      </div>
      <div class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
        {{ lastPost.description }}
      </div>
    </div>
    <div class="-ml-24">
      <img
        class="rounded-2xl object-cover ring-1 h-64 w-full lg:h-auto dark:ring-white/10 ring-primary/5 bg-tertiary"
        :src="lastPost.cover"
        :alt="lastPost.title"
      />
    </div>
  </a>
</template>
