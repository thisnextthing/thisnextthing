<template>
  <h2 class="font-bold text-[1.5rem] mb-2">What to book for This Next Thing</h2>

  <h3 class="font-medium text-[1.2rem]">Getting there - Sunday, June 25th</h3>

  <p>
    Choose your starter city:
  </p>

  <ul>
    <li v-for="city in cities"><label><input type="radio" name="starterCity" @click="starterCity = city" :value="city"> {{city}}</label></li>
  </ul>

  <p>Your starter city is {{starterCity}}</p>

  <p>
    There’s a lot included with your ticket for This Next Thing, but this is a short guide on what you need to book to get the most out of your trip.
  </p>

  <p>
    The first choice you need to make is your starter city. We’ll have an unconf welcome event in each of Zürich, Innsbruck and Milan. This gives you flexibility on where to start, but also a chance to hang out with a smaller group before coming together as a big group.
  </p>

  <p>
    Obviously, you can arrive at your starter city any time before June 25th, but we would advise arriving no later than the afternoon of June 25th. The local unconference will kick off late afternoon / early evening.
  </p>

  <p>
    You will need to <strong>book your own accommodation</strong> in your starter city.
  </p>

  <h3 class="font-medium text-[1.2rem]">Travel day - Monday, June 26</h3>
  <p>
    June 26 is travel day. We will organise group rail or bus tickets (Rail from Zürich and Milan, bus from Innsbruck), and let you know when and where from you will depart.
  </p>

  <p>
    <strong>Breakfast is not included</strong>, but we will organise a light lunch, and dinner that evening.
  </p>

  <p>
    We will arrange your accommodation in Pontresina and your room will be ready to check-in when you arrive.
  </p>

  <h3 class="font-medium text-[1.2rem]">The main day - Tuesday, June 27</h3>
  <p>
    Your breakfast, lunch, dinner and accommodation is covered this day.
  </p>

  <h3 class="font-medium text-[1.2rem]">The last day - Wednesday, June 28 - getting away</h3>
  <p>
    Breakfast is included this day, but from here you have two choices:

    <ul class="list-disc list-outside ml-8 mb-4">
      <li>
        Let us know whether you’d like to stay an additional night in Pontresina, in which case we’ll organise and offer an informal group dinner for those who choose to stay on.
      </li>

      <li>
        Arrange your onward transportation. There is a train station in Pontresina, and you can book tickekts on the <a href="https://www.sbb.ch" class="font-bold">SBB website</a>. Depending on where you are headed, you could also rent a car, get a taxi. There is also a <a href="https://www.engadin-airport.ch" class="font-bold" target="_new">small airport</a> 10 minutes drive away, and it may be possible to pool resources to get a flight.
      </li>
    </ul>
  </p>

  <p>
    If you do choose to stay an additional night, there will be at least a handful of us staying on to unwind after the show, play games and really just enjoy the space for what it is after the intensity of talks and adventures.
  </p>
</template>

<script>
export default {
  data(){
    return {
      starterCity: null
    }
  },

  computed: {
    cities(){
      return ["Zürich", "Milan", "Innsbruck"]
    }
  }
}
</script>