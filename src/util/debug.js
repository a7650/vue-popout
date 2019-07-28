export function warn(msg) {
  console.error(`[Vue-popout warn]: ${msg}`)
}

export function assert(condition, msg) {
  if (!condition) {
    throw new Error(('[Vue-popout] ' + msg))
  }
}

export function err(msg) {
  throw new Error(('[Vue-popout] ' + msg))
}