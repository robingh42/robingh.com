<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        Take me home please❤️
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `Oops, well that didn't work.`,
  `Looks like we've got some broken links.`,
  `Well this is awkward...`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
