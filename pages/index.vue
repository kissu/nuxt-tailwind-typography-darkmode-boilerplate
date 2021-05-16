<template>
  <div
    class="dark:bg-gray-800 sm:prose-sm dark:prose-light w-full h-screen pt-8 mx-auto prose-xl text-center"
  >
    <button class="dark:hover:text-yellow-300 text-red-500" @click="$colorMode.preference = 'dark'">
      Switch to dark
    </button>
    <button class="text-blue-500" @click="$colorMode.preference = 'light'">Switch to light</button>
    <p>Current color mode: {{ $colorMode.value }}</p>
    <br />
    <br />

    <div v-for="article in articles" :key="article.id">
      <h1>{{ article.title }}</h1>
      <p>{{ article.text }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles', { text: true }).fetch()

    return {
      articles,
    }
  },
}
</script>
