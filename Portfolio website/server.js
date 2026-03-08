const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// dotenv configuration /shoul be add after import statement
dotenv.config() 

// rest object
const app = express()

// middlewares 
app.use(cors())
app.use(express.json())

// routes
app.use('/api/v1/portfolio' ,require('./Routes/portfolioRoutes'))

// port
const PORT =  process.env.PORT || 8080  //to target the port

// listen
app.listen(PORT ,() => {
    console.log(`Server running on PORT ${PORT}`)
});