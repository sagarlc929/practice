export function sendSuccessResponse(res,statusCode, message, data = null){
  const success = true;
  res.status(statusCode).json({success, message, ...data});
}

export function sendErrorResponse(res, statusCode, message){
  res.status(statusCode).json({'success': false, message});
}

