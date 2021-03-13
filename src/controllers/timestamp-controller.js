const timestampController = (req, res) => {
  res.json({ utc: new Date().toString() });
};

module.exports = timestampController;
