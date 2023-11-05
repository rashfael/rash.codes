<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template lang="pug">
template(v-if="frontmatter.layout === 'none'")
	Content
.page-root(v-else)
	Content.content
</template>
