const { Router } = require('express')
const router = Router()
const controller = require('../controllers/times.controller')

router.get('/', async (req, res, next) => {
  const geo_initial_cities = [
    "London,UK",
    "Santiago,CL",
    "Zurich,CH",
    "Auckland,NZ",
    "Sydney,AU",
    "Atlanta,GA"
  ]

  try {
    const data = await controller.getAll(geo_initial_cities)
    res.status(200).json({message: "Data fetched succesfully.", data})
  } catch (error) {
    res.status(500).json({ERROR: "Unexpected error", error})    
  }

})

router.get('/:location', async (req, res, next) => {
  try {
    const {data} = await controller.get(req.params.location)
    res.status(200).json({message: "Data fetched succesfully.", data})
  } catch (error) {
    res.status(500).json({ERROR: "Unexpected error", error})
  }
})


module.exports = router