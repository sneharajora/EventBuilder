const express = require("express");
const {getEvents,geteventsById} = require("../controllers/eventController")


const router = express.Router();

router.get('/',getEvents);
router.get('/:id',geteventsById);

module.exports = router