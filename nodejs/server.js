// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path = require('path');

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: process.env.DB_NAME // Adding dbName option for specifying the database name
// });

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// const NameSchema = new mongoose.Schema({
//     name: String
// });

// const Name = mongoose.model('Name', NameSchema);

// app.post('/names', async (req, res) => { // Using async function for handling asynchronous operations
//     try {
//         // const newName = new Name({ name: req.body.name });
//         // await newName.save(); // Using await to handle promise returned by save()
//         res.status(200).send('Name saved successfully');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error saving name to database');
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');

const app = express();

// Define a route to handle incoming requests
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Set up the server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
