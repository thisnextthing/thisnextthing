<template>
  <form @submit.prevent.stop="submit">
    <div class="flex items-center justify-center relative mt-4 p-4 transition-all" :class="{'pt-[7rem]': consented}">
      <div class="absolute top-0 left-0 right-0 rounded p-4 flex flex-col gap-4 items-center justify-center transition-all"
           :class="{
            'bg-white opacity-95 bottom-0': !consented
           }">
        <h2 for="email" class="block text-md font-light text-center">Sign up for updates</h2>
        <fieldset>
          <legend class="sr-only">Consent to sign up</legend>
          <div class="relative flex items-start">
            <div class="flex h-5 items-center">
              <input @click="hello" v-model="consented" id="consented" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500" />
            </div>
            <div class="ml-3 text-sm">
              <label for="consented">I consent to being contacted by email for information about This Next Thing</label>
            </div>
          </div>
        </fieldset>
      </div>
      <tito-register-interest event="this-next-thing/2023"/>
    </div>
  </form>
</template>

<script setup>
import { AtSymbolIcon } from '@heroicons/vue/20/solid'
import {ref} from "vue"

import axios from "axios"

console.log("hello")

const email = ref("")
const consented = ref(false)

async function submit(){
  console.log("submitting")
  if(consented)
  {
    console.log("signing up!")
    const response = await axios.get("https://ti.to/this-next-thing/2023/interested_users/subscribe.json", {email: email})
    console.log(response)
  }
  else
  {
    console.log("not consented")
  }
}
</script>

<style>
.tito-register-interest-form {
  @apply flex flex-col gap-4 mt-4
}

.tito-register-interest-form input {
  display: block;
}

.tito-register-interest-form button {
  display: block;
  @apply bg-royal-blue text-white hover:bg-warm-blue active:bg-warm-blue p-4 uppercase font-bold
}


</style>