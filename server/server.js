import express from 'express'
import cors from 'cors'
import orderRoutes from './routes/orderRoutes.js'

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.use('/orders', orderRoutes)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})