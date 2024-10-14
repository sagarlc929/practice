export const addTimestamp = (req, res, next) => {
  const timestamp = new Date().toISOString();  // Capture the current timestamp
  const originalJson = res.json;  // Save the original res.json function
  console.log(timestamp);
  // Override the res.json function
  res.json = function (body) {
    body.timestamp = timestamp;  // Add timestamp to the response body
    return originalJson.call(this, body);  // Call the original res.json
  };

  next();  // Move to the route handler
};

