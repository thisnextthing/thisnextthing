<template>
  <TickTockSection type="tick">
    <SectionContent>
      <h2 class="font-bold text-[1.5rem] mb-2">
        This Next Thing - Booking
      </h2>

      <p>
        We realise that This Next Thing offers some unique choices that you may not have experienced elsewhere. Hopefully this step-by-step guide to booking will help you.
      </p>

    </SectionContent>
  </TickTockSection>

  <TickTockSection type="tock">
    <SectionContent class="mb-4">
      <div class="flex flex-col md:flex-row">
        <p>
          Because there’s a mix of things to book and things included, we’ve created a booking guide. You should read that first.
        </p>
        <a href="/2023/guide" class="bg-white text-royal-blue px-4 py-2 hover:bg-light-blue rounded text-center min-w-content">Read the booking guide</a>
      </div>
    </SectionContent>
  </TickTockSection>

  <TickTockSection type="tick">
    <SectionContent>
      <h2 class="font-bold text-[1.5rem] mb-2">
        Things to think about
      </h2>

      <p>
        You definitely don’t need to sweat choosing a starter city, but here are a few points that might help. There’s no nearest airport city to the Alps, so we decided to give folks the choice of where to start.
      </p>

      <ul class="list-disc list-outside ml-8 mb-4">
        <li>
          <strong class="font-heavy text-white">Practicality</strong>
          <br>
           The simplest way is to check flights or other transport options and simply book the city that’s easiest for you to get to.
        </li>
        <li>
          <strong class="font-heavy text-white">Adventure</strong>
          <br>
          Alternatively, you may want to choose a city based on what you know about it (or don’t know), and use it as a chance to explore somewhere new.
        </li>
        <li>
          <strong class="font-heavy text-white">Have it two ways</strong>
          <br>
          If you’re on the fence, you could always start in one city and finish in another. Each city is a similar distance from the venue.
        </li>
      </ul>

      <SectionSubheader class="mb-4">
        Confirm your choice:
      </SectionSubheader>

      <p>
        <starter-city-chooser v-model="starterCity" />
      </p>
    </SectionContent>
  </TickTockSection>

  <TickTockSection type="tock" v-if="starterCity === 'Zürich'">
    <img :src="zurichPhoto"/>
    <p class="p-4">Zürich, photo by <a href="https://unsplash.com/@rickpsd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Henrique Ferreira</a> on <a href="https://unsplash.com/photos/6p-I-X-sPUY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  </TickTockSection>

  <TickTockSection type="tock" v-if="starterCity === 'Milan'">
    <img :src="milanPhoto"/>
    <p class="p-4">Milan, photo by <a href="https://unsplash.com/@mrsimonfischer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Szymon Fischer</a> on <a href="https://unsplash.com/photos/bODFQ7D3JYo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  </TickTockSection>

  <TickTockSection type="tock" v-if="starterCity === 'Innsbruck'">
    <img :src="innsbruckPhoto"/>
    <p class="p-4">Innsbruck, photo by <a href="https://unsplash.com/@nicolebaster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nicole Baster</a> on <a href="https://unsplash.com/photos/DZUgKFjEDuM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  </TickTockSection>


  <section class="p-4 flex flex-col gap-4 items-center justify-center">
    <h2 class="font-bold text-[1.5rem] mb-2">Now get your tickets:</h2>

    <div class="flex flex-col md:flex-row gap-4 items-center justify-center">

      <a href="#/tito/this-next-thing/2023/en/registrations/new?releases=start-zuerich,plus-one-zuerich,supporter-zuerich,kid-ticket" class="bg-royal-blue text-white hover:bg-warm-blue active:bg-warm-blue p-4 uppercase font-bold" v-if="starterCity === 'Zürich'">🇨🇭 Start in Zürich</a>

      <a href="#/tito/this-next-thing/2023/en/registrations/new?releases=start-milan,plus-one-milan,supporter-milan,kid-ticket" class="bg-royal-blue text-white hover:bg-warm-blue active:bg-warm-blue p-4 uppercase font-bold" v-if="starterCity === 'Milan'">🇮🇹 Start in Milan</a>

      <a href="#/tito/this-next-thing/2023/en/registrations/new?releases=start-innsbruck,plus-one-innsbruck,supporter-innsbruck,kid-ticket" class="bg-royal-blue text-white hover:bg-warm-blue active:bg-warm-blue p-4 uppercase font-bold" v-if="starterCity === 'Innsbruck'">🇦🇹 Start in Innsbruck</a>
    </div>
  </section>
</template>

<script setup>
import TickTockSection from "../components/TickTockSection.vue"
import SectionContent from "../components/SectionContent.vue"
import SectionHeader from "../components/SectionHeader.vue"
import SectionSubheader from "../components/SectionSubheader.vue"

import StarterCityChooser from "../components/StarterCityChooser.vue"

import innsbruckPhoto from "../images/cities/innsbruck.jpg"
import milanPhoto from "../images/cities/milan.jpg"
import zurichPhoto from "../images/cities/zurich.jpg"
</script>

<script>
import cities from "../mixins/cities.js"
export default {
  mixins: [cities],
}
</script>
