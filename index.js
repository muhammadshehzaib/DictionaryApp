const express = require("express")
const app = express()
const port = 8080
const userRoutes = require("./src/routes/userRoutes")

app.use((userRoutes));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})