const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: "Email or password missing during signin or signup",
    });
  }
  next();
};

const validateIsAdminRequest = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      success: false,
      data: {},
      err: "User id is not given",
      message: "Something went wrong ",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
  validateIsAdminRequest,
};
