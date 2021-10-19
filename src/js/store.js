
import axios from 'axios';
import { createStore } from 'framework7/lite';

axios.defaults.baseURL = 'https://www.cremona1.it'

const store = createStore({
  state: {
    videoList: null,
    videoDetails: null,
    videoAdvertise: null,
    programList: null,
    programDetails: null,
    programVideos: null,
    schedule: null
  },

  getters: {
    videoList({ state }) {
      return state.videoList
    },

    videoDetails({ state }) {
      return state.videoDetails
    },

    videoAdvertise({ state }) {
      return state.videoAdvertise
    },

    programList({ state }) {
      return state.programList
    },

    programDetails({ state }) {
      return state.programDetails
    },

    programVideos({ state }) {
      return state.programVideos
    },

    schedule({ state }) {
      return state.schedule
    },
  },

  actions: {
    // Videos
    fetchVideoList({ state }) {
      axios.get('/wp-json/wp/v2/video?_fields=id, title, content, better_featured_image').then((res) => {
        state.videoList = res.data
      })
    },

    fetchVideoDetails({ state }, payload) {
      axios.get(`/wp-json/wp/v2/video/${payload}?_fields=id, title, content, embed`).then((res) => {
        state.videoDetails = res.data
      })
    },

    fetchVideoAdvertise({ state }) {
      axios.get('/wp-json/wp/v2/video?_fields=id, title, content, better_featured_image&per_page=3').then((res) => {
        state.videoAdvertise = res.data
      })
    },

    // Programs
    fetchProgramList({ state }) {
      axios.get('/wp-json/wp/v2/programma?_fields=id, title, content, better_featured_image').then((res) => {
        state.programList = res.data
      })
    },

    fetchProgramDetails({ state }, payload) {
      axios.get(`/wp-json/wp/v2/programma/${payload}?_fields=id, title, content, better_featured_image, presentatore`).then((res) => {
        console.log("Program details: ", res.data)
        state.programDetails = res.data
      })
    },

    fetchProgramVideos({ state }) {
      axios.get('/wp-json/wp/v2/video?_fields=id, title, content, better_featured_image&per_page=10').then((res) => {
        state.programVideos = res.data
      })
    },

    //  Schedule
    fetchSchedule({ state }, payload) {
      if (!payload) {
        const date = new Date()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let year = date.getFullYear()

        if (month.length < 2)
          month = '0' + month

        if (day.length < 2)
          day = '0' + day

        payload = [year, month, day].join('-')
        console.log('Payload: ', payload)

      }
      axios.get(`/wp-json/wp/v2/palinsesto?date=${payload}`).then(res => {
        state.schedule = res.data
      })
    }
  },
})
export default store;
