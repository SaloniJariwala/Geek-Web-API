const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./Config/db");
const { signInUser } = require("./Controller/signin");
const port = process.env.PORT || 3000;

connectDB;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello I am live now");
});

app.use("/v1/designation", require("./Routes/Designation"));
app.use("/v1/user-role", require("./Routes/UserRole"));
app.use("/v1/user", require("./Routes/User"));
app.use("/v1/sign-in", require("./Routes/User"));

app.listen(port, () => console.log(`Server started on port ${port}`));