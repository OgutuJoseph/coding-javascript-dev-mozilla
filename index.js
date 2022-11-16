const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

/** middlewares */
app.use(express.json());

/** routes */
// app.use('/built-in-objects/array', require('./routes/built-in-objects/array'));
const routes = require('./routes');

const port = process.env.PORT;

app.use(routes);

app.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
})