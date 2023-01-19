<template>
  <section :id="id" :class="type">
    <slot />
  </section>
</template>

<script>
export default {
  props: ["id", "type"]
}
</script>

<style scoped>
  section {  max-width: 80ch; @apply md:pb-8 }

  section.tick, section.tock { @apply bg-opacity-80 -mt-4 md:-mt-8 md:rounded-xl overflow-hidden  }

  .tick { 
    @apply bg-light-blue md:ml-8 text-royal-blue md:rounded-l-xl md:rotate-1;
   }

  .tock { 
    @apply bg-royal-blue md:mr-8 text-white md:rounded-r-xl md:-rotate-1;
  }

  .tock h2, .tock a {
    @apply text-light-blue
  }

  .tock a:hover {
    @apply text-blue-100
  }
</style>