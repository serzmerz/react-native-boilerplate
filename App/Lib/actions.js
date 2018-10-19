function makeActionDefault (payload) { return { payload } }

export const POSTFIX = {
  request: '/REQUEST',
  success: '/SUCCESS',
  failure: '/FAILURE'
}

export function syncAction (type, makeAction = makeActionDefault) {
  const actionCreator = (...args) => {
    const action = makeAction(...args)
    if (typeof action === 'object') {
      action.type = type
    }
    return action
  }
  actionCreator.type = type
  return actionCreator
}

export function asyncAction (base, makeAction = makeActionDefault) {
  const actionCreator = (...args) => {
    const action = makeAction(...args)
    if (typeof action === 'object') {
      action.type = base
    }
    return action
  }

  actionCreator.type = base
  actionCreator.request = `${base}${POSTFIX.request}`
  actionCreator.success = `${base}${POSTFIX.success}`
  actionCreator.failure = `${base}${POSTFIX.failure}`
  return actionCreator
}
