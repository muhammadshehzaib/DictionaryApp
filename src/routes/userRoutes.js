const express = require("express")
const app = express()
const router = express.Router()
const userModel = require('../models/userModel')

router.post('/addBook', async(req, res) => {
    try {
        const user = new userModel(req.body);
        res.send(user)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.get('/', (req, res) => {
    res.send('Hello World!')
})


module.exports = router