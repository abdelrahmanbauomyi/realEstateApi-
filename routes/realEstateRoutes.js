const express = require('express');
const router = express.Router();

// Import handler
const { getRealEstateData } = require('../handlers/realEstateHandler');

// Define route
router.get('/all', getRealEstateData);

module.exports = router;
