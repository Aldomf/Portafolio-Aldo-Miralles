const express = require("express")
const router = express.Router()

const Contact = require("../models/contact")

router.get('/', (req, res) => {
    res.render("index")
})

router.get('/sent', (req, res) => {
    res.render("sent")
})

router.post('/', async(req, res) => {
    const body = req.body
    try {
        const contactDB = await Contact.create(body)
        console.log(contactDB)
        res.status(200).render("sent");
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;