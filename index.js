const express = require('express');
const app = express();
const port = 3000;

// Import routes
const realEstateRoutes = require('./routes/realEstateRoutes.js');

// Use routes
app.use('/api/realestate', realEstateRoutes);

app.listen(port, () => {
  console.log(`Real Estate API is running at http://localhost:${port}/api/realestate`);
});
