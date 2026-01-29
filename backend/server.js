import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import 'dotenv/config'

import cors from 'cors'
import connectDb from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


const app=express();
const port=process.env.PORT 
app.use(express.json())
app.use(cors())

//endpoints
app.use('/api/food',foodRouter)
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use("/images",express.static('uploads')) //added now
app.use('/api/order',orderRouter)


app.listen(port,()=>{
  connectDb()
  console.log(`server is started at ${port}`);
  
})
