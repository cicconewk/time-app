const axios = require('axios')
const KEY = '44c2722bafe9671420f8521a8f0d3d99'

module.exports = {
  get: async (location) => {
    try {
      const { data } = await axios.get(`https://geocode.xyz/?locate=${location}&json=1&auth=598222676528799237889x2257`)
      const response = await axios.get(`https://api.darksky.net/forecast/${KEY}/${data.latt},${data.longt}?exclude=minutely,hourly,daily,alerts,flags`)

      return response
    } catch (error) {
      return error
    }
  },
  getAll: async (initial) => {
    return await Promise.all(initial.map(async (city) => {
      const { data } = await axios.get(`https://geocode.xyz/?locate=${city}&json=1&auth=598222676528799237889x2257`)
      const resolved = await axios.get(`https://api.darksky.net/forecast/${KEY}/${data.latt},${data.longt}?exclude=minutely,hourly,daily,alerts,flags`)
      return resolved.data
    }))
  }
}
