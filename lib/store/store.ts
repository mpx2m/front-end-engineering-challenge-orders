import { createStore } from 'zustand/vanilla'

export interface State {
  count: number
}

export interface Actions {
  decrementCount: () => void
  incrementCount: () => void
}

export interface StoreInterface extends State, Actions {}

export const initStore = () => {
  return { count: 0 }
}

export const initializeStore = (initState: State) => {
  return createStore<StoreInterface>()(set => ({
    ...initState,
    decrementCount: () => set(state => ({ count: state.count - 1 })),
    incrementCount: () => set(state => ({ count: state.count + 1 }))
  }))
}
