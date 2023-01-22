<template>
  <form @submit.prevent.stop="submit">
    <label for="email" class="block text-sm font-medium text-gray-700">Sign up for updates</label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <div class="relative flex flex-grow items-stretch focus-within:z-10">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <AtSymbolIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input type="email" v-model="email" name="email" id="email" class="block w-full rounded-none rounded-l border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="interested-in@thisnextthing.com" />
      </div>
      <button type="submit" class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" :class="{
        'bg-gray-50': !consented,
        'bg-blue-50 border-blue-300 cursor-pointer': consented
      }">
        <span :class="{'text-gray-200': !consented}">Signup</span>
      </button>
    </div>
    <fieldset class="space-y-5">
      <legend class="sr-only">Consent to sign up</legend>
      <div class="relative flex items-start">
        <div class="flex h-5 items-center">
          <input @click="hello" v-model="consented" id="consented" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
        </div>
        <div class="ml-3 text-sm">
          <label for="consented" class="text-gray-500">I consent to being contacted by email for marketing information about This Next Thing</label>
        </div>
      </div>
    </fieldset>
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