<script setup lang="ts">
import { data as posts } from "../../helper/posts.data.mjs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");
</script>

<template>
  <div
    class="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col items-center rounded-3xl shadow-xl dark:shadow-thick p-8 bg-white dark:bg-secondary overflow-hidden text-center lg:text-left"
  >
    <div
      className="text-2xl font-medium lg:text-3xl text-primary dark:text-white"
    >
      近期文章
    </div>
    <div class="w-full">
      <template v-for="(post, index) in posts.slice(0, 10)" :key="index">
        <a
          :href="post.url"
          class="block text-lg text-primary dark:text-white hover:text-primary dark:hover:text-white/50 duration-300 transition-all flex justify-between py-2 overflow-hidden w-full"
        >
          <span class="truncate">
            {{ post.title }}
          </span>
          <span class="w-24 min-w-24 text-right">
            {{ dayjs().from(post.date.time) }}
          </span>
        </a>
      </template>
    </div>
  </div>
</template>
