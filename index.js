const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

/** middlewares */
app.use(express.json());

/** routes */
// app.use('/arrays', require('./routes/arrays'));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
})