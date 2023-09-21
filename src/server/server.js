// import express from 'express';
// const app = express();
// const port = 5000;
// const cors = require(cors);
// // Increase the header size limit to 20MB
// app.use(express.json({ limit: "20mb" }))
// app.use(bodyParser.json({ limit: "20mb" }))


// // Define the API endpoint URL
// const apiUrl = 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates';

// // Create a route that proxies the request to the TravelPayouts API
// app.get('/api/flights', async (req, res) => {
//   try {
//     // Make a GET request to the TravelPayouts API with limited headers
//     const response = await axios.get(apiUrl, {
//       params: {
//         token: 'f7e15ed6a62d8a82ba83fb7603c3e92e',
//         departure_at: '2023-10',
//         origin: 'DEL',
//         destination: 'LKO',
//       },
//       headers: {
//         // Add only necessary headers here
//         'User-Agent': req.headers['user-agent'],
//         'Accept': req.headers['accept'],
//       },
//     });

//     // Send the API response back to the client
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//     res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
//   }
// });



// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
var bodyParser = require('body-parser')
app.use(bodyParser()({limit:'5000kb'}));
// Increase the header size limit to 20MB
// app.use(express.json({ limit: '20mb' }));

// Define the API endpoint URL
const apiUrl = 'https://api.travelpayouts.com/aviasales/v3/prices_for_dates';

// Create a route that proxies the request to the TravelPayouts API
app.get('/api/flights', async (req, res) => {
  try {
    // Make a GET request to the TravelPayouts API with limited headers
    const response = await axios.get(apiUrl, {
      params: {
        token: 'f7e15ed6a62d8a82ba83fb7603c3e92e',
        departure_at: '2023-10',
        origin: 'DEL',
        destination: 'LKO',
      },
      headers: {
        // Add only necessary headers here
        'User-Agent': req.headers['user-agent'],
        Accept: req.headers['accept'],
      },
      maxRedirects: 5, // You can adjust this as needed
      maxContentLength: 20000000, // 20MB response size limit
    });

    // Send the API response back to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
