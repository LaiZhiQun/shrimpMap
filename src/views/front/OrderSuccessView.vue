<script>
export default {
  data () {
    return {
      countdown: 3
    }
  },
  mounted () {
    const interval = setInterval(() => {
      this.countdown--
      if (this.countdown === 0) {
        clearInterval(interval)
        // this.$router.push('/')
      }
    }, 1000)
  }
}
</script>

<template>
  <div class="container my-10">
    <h2 class="d-block text-white text-center my-10 py-10">訂單建立完成，將在 {{ countdown }} 秒後導回首頁</h2>
  </div>
</template>
