
const bookingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event",
        required:true
    },
    status:{
        Type:String,
        enum:["confirmed","cancelled"],
        default:"confirmed"
    }
},{timestamps:true});

const Booking = mongoose.model("Booking",bookingSchema);

module.exports = Booking;
