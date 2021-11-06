const auth = (req, res, next) => {
  const key = req.header("Authorization").replace("Bearer", "").trim();
  try {
    if (key === process.env.KEY) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = auth;
