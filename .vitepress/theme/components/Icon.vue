<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  name: string;
  class?: string;
}>();
</script>

<template>
  <i :class="`ti ti-${props.name} ${props.class}`"></i>
</template>
