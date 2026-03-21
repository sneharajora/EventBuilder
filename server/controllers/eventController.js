const mapevent =(event)=>({
    ticketmasterId:event.id,
    title:event.name,
    date:event.dates?.start?.localDate,
    time:event.dates?.start?.localTime,
    category:event.classifications?.[0]?.segment?.name,
    genre:event.classifications?.[0]?.genre?.name,
    venueName:event._embedded?.venues?.[0]?.name,
    city:event._embedded?.venues?.[0]?.city?.name,
    country:event._embedded?.venues?.[0]?.country?.name,
      
})