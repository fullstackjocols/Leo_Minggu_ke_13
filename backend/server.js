const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://leodionis:Zb55bDnj6zI0l2ds@cluster0.tla1zup.mongodb.net/', {
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


app.get('/', (req, res) => {
  res.send('MongoDB connected successfully');
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
