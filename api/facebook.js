module.exports = (req, res) => {
  if (
    req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === 'token'
  ) {
    res.send(req.query['hub.challenge'])
  }

  res.json({
    query: req.query,
    body: req.body,
  })
}
