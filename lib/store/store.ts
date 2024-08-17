import { OrderEvent } from '@/lib/socket/order-event'
import { createStore } from 'zustand/vanilla'

export interface State {
  isConnected: boolean
  transport: string
  allEvents: OrderEvent[]
  tableData: OrderEvent[]
}

export interface Actions {
  setIsConnected: (isConnected: boolean) => void
  setTransport: (transport: string) => void
  updateAllEvents: (eventList: OrderEvent[]) => void
}

export const initStore = (): State => {
  return {
    isConnected: false,
    transport: 'N/A',
    allEvents: [],
    tableData: []
  }
}

export interface StoreInterface extends State, Actions {}

export const initializeStore = (initState: State) => {
  return createStore<StoreInterface>()(set => ({
    ...initState,
    setIsConnected: isConnected => set({ isConnected }),
    setTransport: transport => set({ transport }),
    updateAllEvents: eventList => {
      set(state => {
        const allEvents = [...state.allEvents]
        eventList.forEach(event => {
          const index = allEvents.findIndex(({ id }) => id === event.id)
          if (index === -1) {
            allEvents.push(event)
          } else {
            allEvents[index] = event
          }
        })
        return { allEvents }
      })
    }
  }))
}
