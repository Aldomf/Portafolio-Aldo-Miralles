const mongoose = require('mongoose');
require("dotenv").config();

const uri = `mongodb+srv://alditomiralles3:${process.env.PASSWORD}@aldo.l3up4qv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });




