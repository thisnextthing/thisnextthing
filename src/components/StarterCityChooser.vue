<template>
  <ul class="mb-4 flex divide-x w-full block rounded overflow-hidden">
    <li v-for="city in cities" class="bg-royal-blue block text-white flex-1 flex items-center justify-center"
        :class="{'bg-blue-100': starterCity === city}">
      <label class="inline-flex items-center gap-2 cursor-pointer p-2 md:px-4 whitespace-nowrap w-full flex items-center justify-center">
        <input type="radio" class="sr-only" name="starterCity" v-model="starterCity" @click="starterCity = city" :value="city">
        <span :class="{'font-bold text-royal-blue': starterCity === city}">{{cityEmojis[city]}} {{city}}</span>
      </label>
    </li>
  </ul>
</template>

<script>
import cities from "../mixins/cities.js"
export default {
  mixins: [cities],

  watch:{
    starterCity(){
      this.$emit("update:modelValue", this.starterCity)
    }
  }
}
</script>