function handleSubscribeChallenge(req, res) {
  res.send(req.query['hub.challenge'])
}

function handleNewFacebookEvent(req, res) {
  res.json({
    query: req.query,
    body: req.body,
  })
}

module.exports = (req, res) => {
  if (
    req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === 'token'
  ) {
    return handleSubscribeChallenge(req, res)
  }

  if (req.body) {
    return handleNewFacebookEvent(req, res)
  }
}
