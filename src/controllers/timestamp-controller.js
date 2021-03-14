const timestampController = (req, res) => {
  let resObject = {};

  let { date_string } = req.params;

  if (date_string.includes('-')) {
    resObject['utc'] = new Date(date_string).toUTCString();
    resObject['unix'] = Math.round(new Date(date_string).getTime());
  } else {
    date_string = parseInt(date_string);

    resObject['utc'] = new Date(date_string).toUTCString();
    resObject['unix'] = Math.round(new Date(date_string).getTime());
  }

  if (!resObject['unix'] || !resObject['utc']) {
    return res.json({ error: 'Invalid Date' });
  }

  return res.json(resObject);
};

module.exports = timestampController;
