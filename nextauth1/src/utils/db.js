import mongoose from "mongoose"

const connect = async () => {
    if(mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo Connection successfully established.");
    }catch(error) {
          console.log("error connecting to the MongoDB",error)
    }
}

export default connect;