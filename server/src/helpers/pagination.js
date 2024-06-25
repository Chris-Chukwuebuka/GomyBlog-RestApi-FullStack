const { query } = require("express");

// Function to get pagination object
const getPagination = (query) => {
  const page = Math.abs(query.page);
  const limit = Math.abs(query.limit);

  // Calculate the number of items to skip
  const skip = (page - 1) * limit;

  return { skip, limit };
};

module.exports = getPagination;
