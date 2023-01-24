<template>
  <section :id="id" :class="useClass">
    <slot />
  </section>
</template>

<script>
import tickTock from "../tickTock.js"
export default {
  props: ["id", "type"],

  computed: {
    useClass(){
      if(this.type)
      {
        return this.type
      }
      return `${tickTock.next()} p-4`
    }
  }
}
</script>

<style scoped>
  section {  max-width: 80ch; @apply md:mb-4 }

  section.tick, section.tock { @apply bg-opacity-80 -mt-4 md:-mt-8 rounded-xl overflow-hidden  }

  .tick { 
    @apply bg-light-blue md:ml-8 text-royal-blue rounded-l-xl rotate-1;
   }

  .tock { 
    @apply bg-royal-blue md:mr-8 text-white rounded-r-xl -rotate-1;
  }

  .tock h2, .tock a {
    @apply text-light-blue
  }

  .tock a:hover {
    @apply text-blue-100
  }
</style>