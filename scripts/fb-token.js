#!/usr/bin/env node

const fetch = require('node-fetch')
const inquirer = require('inquirer')
const clipboardy = require('clipboardy')
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

async function getShortLiveToken() {
  console.log('Go to Facebook Graph Explorer:')
  console.log(
    'https://developers.facebook.com/tools/explorer/?method=GET&path=TCFranconvilleOfficiel%2Fposts&version=v5.0'
  )

  await waitForEnter()

  console.log(
    'Select « TC Franconville - Officiel » app; « manage_pages » and « pages_show_list » must be selected'
  )
  console.log('Click on « Get access token » button')
  console.log('Copy the token and paste it here:')

  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'token',
      message: 'Copy the token and paste it here:',
      validate: token => Boolean(token),
    },
  ])

  return answer.token
}

async function exchangeToken(token) {
  const response = await fetch(
    `https://graph.facebook.com/v5.0/oauth/access_token?fb_exchange_token=${token}&grant_type=fb_exchange_token&client_id=${process.env.FB_CLIENT_ID}&client_secret=${process.env.FB_CLIENT_SECRET}`
  )

  const data = await response.json()

  if (data.error) {
    throw new Error(data.error.message)
  }

  return data
}

async function updateEnvFile(longToken) {
  await clipboardy.write(longToken.access_token)
  console.log(
    'Open .env file and replace FB_TOKEN value by the following token (it has been copied in your clipboard):'
  )
  console.log(longToken.access_token)

  await waitForEnter()
}

function waitForEnter() {
  return inquirer.prompt([
    {
      name: 'enter',
      message: 'Press enter when done',
    },
  ])
}

async function updateZeitVariables(token) {
  console.log(
    'If you want to update the token on Zeit Now, execute the following commands:'
  )
  console.log()
  console.log(`set FB_TOKEN ${token.access_token}`)
  console.log('now secrets rm fb_token')
  console.log('now secrets add fb_token $FB_TOKEN')

  await waitForEnter()
}

function showExpiration(token) {
  console.log(
    `The new token will now be used. It will expire in ${token.expires_in}s`
  )
}

async function main() {
  const shortToken = await getShortLiveToken()
  const longToken = await exchangeToken(shortToken)
  await updateEnvFile(longToken)
  await updateZeitVariables(longToken)
  showExpiration(longToken)
}

if (require.main === module) {
  main()
}
