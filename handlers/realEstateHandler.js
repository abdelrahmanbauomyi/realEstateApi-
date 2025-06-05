const realEstateData = require('../Model/RealEstateData'); // adjust if folder is different

const getRealEstateData = (req, res) => {
  res.json({
    status: 'success',
    total: realEstateData.length,
    data: realEstateData
  });
};

module.exports = { getRealEstateData };
