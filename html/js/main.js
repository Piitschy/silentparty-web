const app = Vue.createApp({
  data() {
    return {
      baseUrl: "https://cms.silentparty-hannover.de/",
      partydate: ""
    }
  },
  methods: {

    reformatDate(dateStr) {
      dArr = dateStr.split("-");  // ex input "2010-01-18"
      return dArr[2]+ "." +dArr[1]+ "." +dArr[0].substring(2); //ex out: "18.01.10"
    },

    async loadData(url) {
      const response = await fetch(url)
      json = await response.json()
      return json
    },
    async getPartyDate() {
      partydate = await this.loadData(this.baseUrl+"party-date")
      if (!partydate.show_text) {
        return this.reformatDate(partydate.date)
      }
      return partydate.text
    }
  },
  async mounted() {
    this.partydate = await this.getPartyDate()
  }
})