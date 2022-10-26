require("dotenv").config();

const express = require('express')
const app = express()
const mainRouter = require('./src/routes/index')
const bodyParser = require('body-parser')
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000
const helmet  = require('helmet')
const xss = require('xss-clean')
const cors = require('cors')
const myCors = require('./src/middlewares/common')

app.use(helmet())
app.use(xss())
app.use(cors(myCors))
app.use(bodyParser.json())


// Router
app.use('/v1', mainRouter)

// Error Handling

app.all('*', (req, res) => {
  res.status(404).json({message :'Not found'});
})

// Error Handling
// app.use((err, req, res) => {
//   const messError = err.message || "internal server error";
//   const statusCode = err.status || 500;
//   console.log(err.message);
//   res.status(statusCode).json({
//     message: messError
//   });
// });


app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`)
})