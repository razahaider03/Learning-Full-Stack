import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Any?type=twopart"
app.use(express.static("public"));

app.get("/", async (req, res) => {
    const result = await axios.get(API_URL)
    console.log(result.data)
    res.render("index.ejs", {
        joke: result.data.setup,
        delivery: result.data.delivery,
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})