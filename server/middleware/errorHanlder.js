const { logger } = require("../config/logger");

const errorMiddleware = (error, req, res, next) => {
  try {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";

    logger.error(
      `[${req.method}] ${req.path} ===> StatusCode:: ${status}, Message:: ${message}`
    );
    res.status(status).json({
      message: "something went wrong"
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = errorMiddleware;
