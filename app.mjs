
import express from 'express';
import bodyParser from 'body-parser';
import connectToDatabase from './src/config/dbConfig.mjs';
import bookingRoutes from './src/routes/bookingRoutes.mjs';
import cors from 'cors';
import Users from "./src/routes/userRoute.mjs"
import Reviews from "./src/routes/reviewRoutes.mjs"
import paymentRoutes from "./src/routes/paymentRoutes.mjs"

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended:false}))


// mount routes here 
app.use('/api' , bookingRoutes)
app.use('/api/users' , Users)
app.use('/api/reviews', Reviews)
app.use('/api/payments', paymentRoutes)


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use((req, res) => {
  res.status(404).send('<h1>404! Page Not Found</h1>');
});
app.listen(process.env.PORT || 3001, () => {
    connectToDatabase();
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
  });
  
export default app;

