export const START_LOADING = 'START_LOADING'
export const END_LOADING = 'END_LOADING'

export function startLoading() {

  return {
    type: START_LOADING
  }
}

export function endLoading() {

  return {
    type: END_LOADING
  }
}
