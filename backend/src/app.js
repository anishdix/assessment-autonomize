const express = require("express");
const cors = require("cors");
const dotenv=require("dotenv");
dotenv.config()
const httpStatus = require("http-status");
const routes=require("./routes/api")
const { errorHandler } = require("./middlewares/error");
const ApiError=require("./utils/ApiError")
const helmet = require("helmet");


const app = express();
// console.log(process.env.PORT)

// set security HTTP headers - https://helmetjs.github.io/
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());

app.options("*", cors());


app.use('/api', routes);


// redirect all /api routes to main routes
// app.use("/api",routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// handle error
app.use(errorHandler);

module.exports = app;