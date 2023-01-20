<template>
  <li class="pl-4 relative" :class="{
      'opacity-75': this.checked.includes(item)
    }">
    <label
      class="flex flex-col cursor-pointer text-lg"
      :class="{'line-through': checked.includes(item)}">
      <input type="checkbox" v-model="checked" :value="item" class="absolute -left-2 top-2">
      <slot />

      <em v-if="hint">{{hint}}</em>
    </label>
  </li>
</template>

<script>
export default {
  props: ["hint", "item", "modelValue"],

  data(){
    return {
      checked: this.modelValue
    }
  },

  watch: {
    checked(){
      this.$emit("update:modelValue", this.checked)
    }
  }
}
</script>