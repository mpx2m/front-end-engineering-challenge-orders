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
        const newAllEvents = [...state.allEvents]
        eventList.forEach(event => {
          const index = newAllEvents.findIndex(order => order.id === event.id)
          if (index === -1) {
            newAllEvents.push(event)
          } else {
            newAllEvents[index] = event
          }
        })
        return { allEvents: newAllEvents }
      })
    }
  }))
}
