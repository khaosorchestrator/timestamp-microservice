const unixTimestampController = (req, res) => {
  const timeStamp = Math.round(new Date().getTime() / 1000);
  res.json({ unix: timeStamp.toString() });
};

module.exports = unixTimestampController;
