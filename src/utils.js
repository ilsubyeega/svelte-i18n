export const capital = (str) => str.replace(/(^|\s)\S/, l => l.toUpperCase())
export const title = (str) => str.replace(/(^|\s)\S/g, l => l.toUpperCase())
export const upper = (str) => str.toLocaleUpperCase()
export const lower = (str) => str.toLocaleLowerCase()

export const isObject = (obj) => obj !== null && typeof obj === 'object'

export function warn(msg, err) {
  if (typeof console !== 'undefined') {
    console.warn(`[svelte-i18n] ${msg}`)
    if (err) {
      console.warn(err.stack)
    }
  }
}
