const express = require('express')
const app = express()
  app.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.send('DaneeAPI: Working!')
  })
  
  app.get('/image', async (req, res) => {
    const images = [
      "https://daneeskripter.xyz/images/1.png",
      "https://daneeskripter.xyz/images/2.png",
      "https://daneeskripter.xyz/images/3.png",
    ]
    const randomimage = images[Math.floor(Math.random() * images.length)]
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      image: randomimage
    })
  })

  app.listen(80)