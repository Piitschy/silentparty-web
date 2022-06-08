import { Directus } from '@directus/sdk';

const directus = new Directus('https://cms.silentparty-hannover.de');
console.log(directus)

const app = Vue.createApp({
  data() {
    return {
      baseUrl: "https://cms.silentparty-hannover.de/",
      partydate: "coming soon",
      quickinfos: []
    }
  },

  methods: {
    reformatDate(dateStr) {
      dArr = dateStr.split("-");  // ex input "2010-01-18"
      return dArr[2]+ "." +dArr[1]+ "." +dArr[0].substring(2); //ex out: "18.01.10"
    },

    async loadData(subUrl) {
      const response = await fetch(this.baseUrl+subUrl)
      json = await response.json()
      return json
    },

    async getPartyDate() {
      partydate = await this.loadData("party-date")
      if (!partydate.show_text) {
        return this.reformatDate(partydate.date)
      }
      return partydate.text
    }

  },
  async mounted() {
    this.partydate = await this.getPartyDate()
    this.quickinfos = await this.loadData("quick-infos")
  }
})