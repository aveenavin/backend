
const express = require('express')          // import express from "express"
require('dotenv').config()

const app = express()

const port = 3000








app.get('/hariharaa', (req, res) => {
                                         res.send('<h1> you are in hari hara website ok !</h1>')
})





app.listen(process.env.PORTJI, () => {
                                       console.log(`Example app listening on port ${port}`)
})