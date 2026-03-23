const axios = require("axios");
const Event = require("../models/event");

const mapevent = event => ({
  ticketmasterId: event.id,
  title: event.name,
  date: event.dates?.start?.localDate,
  time: event.dates?.start?.localTime,
  category: event.classifications?.[0]?.segment?.name,
  genre: event.classifications?.[0]?.genre?.name,
  venueName: event._embedded?.venues?.[0]?.name,
  city: event._embedded?.venues?.[0]?.city?.name,
  country: event._embedded?.venues?.[0]?.country?.name,
  image: event.images?.find(img => img.ratio === "16_9")?.url,
  ticketmasterUrl: event.url,
  totalSeats: 100,
  bookedSeats: 0,
  cachedAt: new Date(),
});

async function findandfetch() {
  try {
    const hourago = new Date(Date.now() - 60 * 60 * 1000);

    const events = await Event.find({
      createdAt: { $gte: hourago },
    });
    console.log(events);

    if (events.length > 0) {
      return events;
    } else {
      const response = await axios.get(
        "https://app.ticketmaster.com/discovery/v2/events.json",
        {
          params: {
            apikey: process.env.TICKETMASTER_API_KEY,
            size: 20,
          },
        }
      );
      const rawdata = response.data._embedded?.events || [];
      const mappedEvents = rawdata.map(event => mapevent(event));
      await Event.insertMany(mappedEvents, { ordered: false });
      return mappedEvents;
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

const getEvents = async (req, res) => {
  try {
    const allevents = await findandfetch();
    res.status(200).json(allevents);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const geteventsById = async (req, res) => {
  try {
   
    const eventbyid = await Event.findById(req.params.id);
     if (!eventbyid) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(eventbyid);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {getEvents,geteventsById}