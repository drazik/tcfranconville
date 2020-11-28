const withImages = require("next-images")
const withSvgr = require("next-svgr")
const withPlugins = require("next-compose-plugins")

module.exports = withPlugins([withImages, withSvgr])
