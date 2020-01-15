const fetch = require('node-fetch')

function handleSubscribeChallenge(req, res) {
  res.send(req.query['hub.challenge'])
}

function handleNewFacebookEvent(req, res) {
  const buildHookUrl =
    'https://api.zeit.co/v1/integrations/deploy/Qmcr1WQiLaVyHmYCnzxqn27eW3wkKmJKxKzsxquNKykKsj/cqISe8qeZb'

  fetch(buildHookUrl)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
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
