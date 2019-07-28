import facepaint from 'facepaint'

const breakpoints = [576, 768, 1024, 1280]

const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

export default mq
