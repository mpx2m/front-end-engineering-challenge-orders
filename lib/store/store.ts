import { OrderEvent } from '@/lib/socket/order-event'
import { createStore } from 'zustand/vanilla'

export interface State {
  isConnected: boolean
  transport: string
  orderEvents: OrderEvent[]
  orderEventTableData: OrderEvent[]
}

export interface Actions {
  setIsConnected: (isConnected: boolean) => void
  setTransport: (transport: string) => void
  updateOrderEvents: (eventList: OrderEvent[]) => void
}

export const initStore = (): State => {
  return {
    isConnected: false,
    transport: 'N/A',
    orderEvents: [],
    orderEventTableData: []
  }
}

export interface StoreInterface extends State, Actions {}

export const initializeStore = (initState: State) => {
  return createStore<StoreInterface>()(set => ({
    ...initState,
    setIsConnected: isConnected => set({ isConnected }),
    setTransport: transport => set({ transport }),
    updateOrderEvents: eventList => {
      set(state => {
        const newOrderEvents = [...state.orderEvents]
        eventList.forEach(event => {
          const index = newOrderEvents.findIndex(order => order.id === event.id)
          if (index === -1) {
            newOrderEvents.push(event)
          } else {
            newOrderEvents[index] = event
          }
        })
        return { orderEvents: newOrderEvents }
      })
    }
  }))
}
