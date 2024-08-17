import { createStore } from 'zustand/vanilla'

export interface State {
  isConnected: boolean
  transport: string
}

export interface Actions {
  setIsConnected: (isConnected: boolean) => void
  setTransport: (transport: string) => void
}

export const initStore = (): State => {
  return { isConnected: false, transport: 'N/A' }
}

export interface StoreInterface extends State, Actions {}

export const initializeStore = (initState: State) => {
  return createStore<StoreInterface>()(set => ({
    ...initState,
    setIsConnected: isConnected => set({ isConnected }),
    setTransport: transport => set({ transport })
  }))
}
