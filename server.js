const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require(path.join(__dirname,"./app/models/index"));

const URL = "mongodb+srv://pranav1214:asd@123@cluster0.ji1uj.mongodb.net/ecommerce_app?retryWrites=true&w=majority"

db.mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log("Connected to Database");
})
.catch(err=>{
    console.log("Server Connection issue", err);
})
  
app.use(cors());

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.json({message: 'Welcome'});
// });
const routes = require(path.join(__dirname,"./app/routes/product.routes"));
routes(app);

const port = process.env.port || 8080 ;

app.listen(port, ()=> {
    console.log(`Server is running on port:${port}`)
});