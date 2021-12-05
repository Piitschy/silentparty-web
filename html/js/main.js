const app = Vue.createApp({
  data() {
    return {
      baseUrl: "https://cms.silentparty-hannover.de/",
    }
  },
  computed: {
    partydate() {
      return this.getPartyDate()
    }
  },
  methods: {
    async loadData(url) {
      const response = await fetch(url)
      json = await response.json()
      return json
    },
    getPartyDate() {
      partydate = this.loadData(this.baseUrl+"party-date")
      return partydate.Date || partydate.Fallback
    }
  }
})