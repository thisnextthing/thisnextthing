export default {
  currentTickTock: "tock",

  next() {
    if(this.currentTickTock === "tick")
    {
      this.currentTickTock = "tock"
    }
    else
    {
      this.currentTickTock = "tick"
    }
    return this.currentTickTock
  }
}