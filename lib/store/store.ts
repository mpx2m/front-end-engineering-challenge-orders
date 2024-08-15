import { createStore } from 'zustand/vanilla'

export interface StoreInterface {
  count: number
  decrementCount: () => void
  incrementCount: () => void
}

export const initStore = () => {
  return { count: new Date().getFullYear() }
}

export const defaultInitState = {
  count: 0
}

export const initializeStore = (initState = defaultInitState) => {
  return createStore<StoreInterface>()(set => ({
    ...initState,
    decrementCount: () => set(state => ({ count: state.count - 1 })),
    incrementCount: () => set(state => ({ count: state.count + 1 }))
  }))
}
