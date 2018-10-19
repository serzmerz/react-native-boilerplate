import { createSelector } from 'reselect';

/**
 *
 * @param path
 * @returns {function(*): (any | *)}
 */
export const peek = (...path) => obj => obj.getIn(path)

export const peekOr = (path, def) => obj => obj.getIn(path, def)

export function raw (data) {
  return data
}

export function selector (...args) {
  return createSelector(...args)
}
