module.exports = (req, res, next) => {
  if (!req.session.user) {
    res.render("sorry")
    return;
  }
  //else continue
  next();
};
