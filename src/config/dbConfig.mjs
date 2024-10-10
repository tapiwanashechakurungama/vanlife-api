import mongoose from "mongoose";

 const MONGOURL = "mongodb+srv://API-VanLife:12345678.@cluster0.tgk34.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

 const connectToDatabase = async () => {
    try {
      // Connect to MongoDB without deprecated options
      await mongoose.connect(MONGOURL);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); // Exit process with failure
    }
  };

  export default connectToDatabase;