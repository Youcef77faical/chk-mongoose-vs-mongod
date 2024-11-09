//imprort mongoose
const mongoose = require("mongoose")
const express = require("express")
const app = express();
const personRoutes = require("./routes/personRoutes")
app.use(express.json())


app.use(personRoutes)



mongoose.connect("mongodb://localhost:27017/person")
    .then(()=>{console.log("mongodb connection")})
    .catch((err)=>{console.log("error connecting to mongodb",err)})

app.listen(3000)







