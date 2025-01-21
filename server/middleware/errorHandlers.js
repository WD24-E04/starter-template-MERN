import createError from "http-errors";

export const duplicateFieldsHandler = (keyValue) => {
  const field = Object.keys(keyValue)[0];
  return createError(`${field} is already exist`);
};

export const isValidId = (req) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    throw createError("The provided ID is invalid.");
};

export const resourceNotFound = (resource, document, action) => {
  if (!resource)
    throw createError(
      404,
      `Sorry, the ${document} you are trying to ${action} doesn't seem to exist.`
    );
};

export const authError = (statusCode, message) => {
  throw createError(statusCode, message);
};

export const routeNotFound = () => {
  throw createError(404, "Page was not found");
};

export const globalErrorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    statusCode: err.status,
    message: err.message,
    stack: err.stack,
  });
};
