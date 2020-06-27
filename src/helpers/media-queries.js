const breakpoints = {
  s: 576,
  m: 768,
  l: 1024,
  xl: 1280,
}

export const mq = (size) => `@media (min-width: ${breakpoints[size]}px)`
