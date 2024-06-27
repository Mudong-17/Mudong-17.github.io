<script setup lang="ts">
import Profile from "../components/block/Profile.vue";
import FindMe from "../components/block/FindMe.vue";
import Post from "../components/block/Post.vue";
import Recent from "../components/block/Recent.vue";
import Music from "../components/block/Music.vue";
import Production from "../components/block/Production.vue";
import WordCloud from "../components/block/WordCloud.vue";
import FriendLink from "../components/block/FriendLink.vue";
import Life from "../components/block/Life.vue";
</script>

<template>
  <div
    class="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4"
  >
    <Profile />
    <Music />
    <Post />
    <Recent />
    <FindMe />
    <Production />
    <WordCloud />
    <FriendLink />
    <Life />
  </div>
</template>
