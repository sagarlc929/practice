function sendSuccessResponse(res,statusCode, message, data = null){
  const success = true;
  res.status(statusCode).json({success, message, ...data});
}

function sendErrorResponse(res, statusCode, message){
  res.status(statusCode).json({'success': false, message});
}

module.exports = { sendSuccessResponse, sendErrorResponse};
