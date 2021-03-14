const timestampController = (req, res) => {
  const { date_string } = req.params;

  if (date_string[4] != '-') {
    const timestamp = new Date(date_string * 1000).toString();

    return res.json({ unix: Number(date_string), utc: timestamp });
  }

  const unixTimestamp = Math.round(new Date(date_string).getTime() / 1000);

  const timestamp = new Date(date_string).toString();

  return res.json({ unix: unixTimestamp, utc: timestamp });
};

module.exports = timestampController;
