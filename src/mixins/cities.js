export default {
  data(){
    return {
      starterCity: null,
    }
  },
  mounted(){
    this.starterCity = localStorage.getItem("starterCity") || null
  },
  watch: {
    starterCity(){
      localStorage.setItem("starterCity", this.starterCity);
    }
  },
  computed: {
    cities(){
      return ["Zürich", "Milan", "Innsbruck"]
    },

    cityEmojis(){
      return {
        "Innsbruck": "🇦🇹",
        "Milan": "🇮🇹",
        "Zürich": "🇨🇭"
      }
    },

    cityEmoji(){
      return this.cityEmojis[this.starterCity]
    },

    country(){
      if(this.starterCity === 'Innsbruck')
      {
        return "Austria"
      }
      if(this.starterCity === 'Zürich')
      {
        return "Switzerland"
      }
      if(this.starterCity === 'Milan')
      {
        return "Italy"
      }
    },

    transportEmoji(){
      if(this.starterCity === 'Innsbruck')
      {
        return "🚌"
      }
      return "🚂"
    },

    trainOrBus(){
      if(this.starterCity === 'Innsbruck')
      {
        return "Bus"
      }
      return "Train"
    }
  }
}