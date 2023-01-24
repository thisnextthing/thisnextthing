<template>
  <TickTockSection id="what-to-book" type="tick">
    <SectionContent>
      <h2 class="font-bold text-[1.5rem] mb-2">What to book for This Next Thing</h2>

      <p>
        There’s a lot included with your ticket for This Next Thing, but this is a short guide on what you need to book to get the most out of your trip.
      </p>

      <h3 class="font-medium text-[1.2rem] mb-4">Choose your starter city:</h3>

      <starter-city-chooser v-model="starterCity" />

    </SectionContent>
  </TickTockSection>

  <template v-if="starterCity">
    <TickTockSection id="starter-city-included" type="tock">
      <SectionContent>
        <p>The following is <strong>included</strong> with your ticket:</p>

        <table class="bg-white rounded-lg w-full overflow-hidden text-royal-blue table-fixed mb-4">
          <thead class="divide-x divide-y">
            <tr class="divide-x divide-y">
              <th>Sun<span class="hidden md:inline">, June</span> 25</th>
              <th>Mon<span class="hidden md:inline">, June</span> 26</th>
              <th>Tues<span class="hidden md:inline">, June</span> 27</th>
              <th>Weds<span class="hidden md:inline">, June</span> 28</th>
            </tr>
            <tr class="divide-x divide-y">
              <th class="font-heavy uppercase text-sm">Day Zero</th>
              <th class="font-heavy uppercase text-sm">Day One</th>
              <th class="font-heavy uppercase text-sm">Day Two</th>
              <th class="font-heavy uppercase text-sm">Day Three</th>
            </tr>
          </thead>
          <tbody>
            <tr class="divide-x divide-y">
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td colspan="2" class="text-center bg-blue-100">🥣 Breakfast</td>
            </tr>

            <tr class="divide-x divide-y">
              <td>&nbsp;</td>
              <td class="text-center bg-red-100">{{transportEmoji}} {{trainOrBus}}<span class="hidden md:inline"> from {{cityEmoji}}</span></td>
              <td class="text-center bg-amber-300" colspan="1">🪑 AM Conf<span class="hidden md:inline">erence</span></td>
              <td rowspan="5">&nbsp;</td>
            </tr>

            <tr class="divide-x divide-y">
              <td>&nbsp;</td>
              <td class="text-center bg-yellow-100" colspan="2">🍲 Lunch</td>
            </tr>

            <tr class="divide-x divide-y">
              <td class="text-center bg-amber-100">{{cityEmoji}} Unconf<span class="hidden md:inline">erence</span></td>
              <td class="text-center bg-amber-300" colspan="2">🪑 PM Conf<span class="hidden md:inline">erence</span></td>
            </tr>

            <tr class="divide-x divide-y">
              <td class="text-center bg-gray-100" colspan="3">🍽️ Dinner</td>
            </tr>

            <tr class="divide-x divide-y">
              <td>&nbsp;</td>
              <td class="text-center bg-sky-100" colspan="2">🛏️ Hotel</td>
            </tr>
          </tbody>
        </table>
      </SectionContent>
    </TickTockSection>

    <TickTockSection id="starter-city-included" type="tick">
      <SectionContent>
        <h2 class="font-bold text-[1.5rem] mb-2">Your travel <strong>checklist</strong></h2>

        <SectionSubheader>
          <strong class="font-heavy uppercase text-sm text-white">Day Zero</strong>
          Sunday, June 25 - Unconf
        </SectionSubheader>
        <ul class="mb-4 list-outside ml-4">
          <GuideCheckbox item="inbound-flight" v-model="checked" hint="Arrive no later than the afternoon of Sunday, June 25">
            ✈️ Arrange transport to {{cityEmoji}} {{starterCity}}, {{country}}
          </GuideCheckbox>

          <GuideCheckbox item="day-zero-accommodation" v-model="checked" hint="For at least the night of Sunday, June 25">
            🛏️ Arrange accommodation in {{cityEmoji}} {{starterCity}}
          </GuideCheckbox>
          
        </ul>

        <SectionSubheader>
          <strong class="font-heavy uppercase text-sm text-white">Day One</strong>
          Monday, June 26 - Travel
        </SectionSubheader>
        <ul class="mb-4 list-outside ml-4">
          <GuideCheckbox item="day-one-breakfast" v-model="checked">
            🥣 Get breakfast in {{cityEmoji}} {{starterCity}}
          </GuideCheckbox>

          <GuideCheckbox item="day-one-transport" v-model="checked" hint="We’ll share exact time and location with you">
            {{transportEmoji}} Make your way to the {{trainOrBus}}
          </GuideCheckbox>

          <GuideCheckbox item="day-one-views" v-model="checked" hint="Don’t forget to look out the windows!">
            🌄 Enjoy the Alpine views and meet some fellow attendees on your journey
          </GuideCheckbox>
        </ul>

        <SectionSubheader>
          <strong class="font-heavy uppercase text-sm text-white">Day Two</strong>
          Tuesday, June 27 - The Main day
        </SectionSubheader>
        <p>
          Everything will be taken care of for you on the main day. We’ll let you know closer to the time what you need to do and where you’ll want to be.
        </p>

        <div class="mb-4 flex flex-col">
          <p>
            On the last day, you can choose to stay an optional extra day. It’s not part of the official event, but some of us will stick around just to wind down.
          </p>
          <label class="inline-flex items-center gap-2 cursor-pointer text-lg">
            <input type="radio" v-model="option" :value="false">
            I will depart on Day Three
          </label>

          <label class="inline-flex items-center gap-2 cursor-pointer text-lg">
            <input type="radio" v-model="option" :value="true">
            I will stay an extra wind-down night
          </label>
        </div>

        <SectionSubheader>
          <strong class="font-heavy uppercase text-sm text-white">Day Three</strong>
          Wednesday, June 28 —
          <template v-if="option">
            Wind-down
          </template>
          <template v-else>
            Goodbye
          </template>
        </SectionSubheader>
        <ul class="mb-4 list-outside ml-4">
          <GuideCheckbox v-if="option" item="day-three-plan" v-model="checked" hint="You could do nothing, go for walks, relax, hang-out. Whatever you want!">
            📋 Plan your day
          </GuideCheckbox>

          <GuideCheckbox v-else item="last-day-transport" v-model="checked" :hint="`You could return to ${cityEmoji} ${starterCity}, or continue your journey elsewhere.`">
            🚗🚌🚂✈️ Plan your onward journey.
          </GuideCheckbox>
        </ul>

        <template v-if="option">
          <SectionSubheader>
            <strong class="font-heavy uppercase text-sm text-white">Day Four</strong>
            Thursday, June 29 —
            Au revoir, Auf Wiedersehen, Arrivederci
          </SectionSubheader>
          <ul class="mb-4 list-outside ml-4">
            <GuideCheckbox item="last-day-transport" v-model="checked" :hint="`You could return to ${cityEmoji} ${starterCity}, or continue your journey elsewhere.`">
              🚗🚌🚂✈️ Plan your onward journey.
            </GuideCheckbox>
          </ul>
        </template>
      </SectionContent>
    </TickTockSection>

    <TickTockSection id="onward" type="tock">
      <SectionContent>
        <h2 class="font-bold text-[1.5rem] mb-2">Getting away</h2>

        <p>Because we don’t want to assume that you want to return to your starter city, and because of the option to stay an extra night, we will leave onward travel up to you.</p>

        <p>There is a train station in Pontresina, and you can book tickets on the <a href="https://www.sbb.ch" class="font-bold">SBB website</a>. Depending on where you are headed, you could also rent a car or get a taxi. There is also a <a href="https://www.engadin-airport.ch" class="font-bold" target="_new">small airport</a> 10 minutes drive away, and it may be possible to pool resources to get a flight.</p>
      </SectionContent>
    </TickTockSection>
  </template>

  <section class="p-4 flex flex-col gap-4 items-center justify-center">
    <a href="/2023/booking" class="bg-royal-blue text-white hover:bg-warm-blue active:bg-warm-blue p-4 uppercase font-bold">
      🎟️ Get your tickets
    </a>
  </section>
</template>

<script setup>
import GuideCheckbox from "../components/GuideCheckbox.vue"
import TickTockSection from "../components/TickTockSection.vue"
import SectionContent from "../components/SectionContent.vue"
import SectionSubheader from "../components/SectionSubheader.vue"
import StarterCityChooser from "../components/StarterCityChooser.vue"
</script>

<script>
import cities from "../mixins/cities.js"
export default {
  mixins: [cities],
  data(){
    return {
      checked: [],
      option: false
    }
  },

  mounted(){
    this.checked = JSON.parse(localStorage.getItem("checked")) || []
    this.option = JSON.parse(localStorage.getItem("option")) || false
  },

  watch: {
    checked(){
      localStorage.setItem("checked", JSON.stringify(this.checked));
    },
    option(){
      localStorage.setItem("option", this.option);
    },
  },
}
</script>
