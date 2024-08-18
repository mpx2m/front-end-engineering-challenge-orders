import { OrderEvent } from '@/lib/socket/order-event'
import { createStore } from 'zustand/vanilla'

export interface State {
  isConnected: boolean
  transport: string
  inputDollars: string
  allEventsUpdatedAt: number
  allEvents: OrderEvent[]
  tableData: OrderEvent[]
}

export interface Actions {
  setIsConnected: (isConnected: boolean) => void
  setTransport: (transport: string) => void
  setInputDollars: (inputDollars: string) => void
  updateAllEventsUpdatedAt: (time: number) => void
  updateAllEvents: (eventList: OrderEvent[]) => void
  updateTableData: () => void
}

export const initStore = (): State => {
  return {
    isConnected: false,
    transport: 'N/A',
    inputDollars: '',
    allEventsUpdatedAt: 0,
    allEvents: [],
    tableData: []
  }
}

export interface StoreInterface extends State, Actions {}

export const initializeStore = (initState: State) => {
  return createStore<StoreInterface>()((set, get) => ({
    ...initState,
    setIsConnected: isConnected => set({ isConnected }),
    setTransport: transport => set({ transport }),
    setInputDollars: inputDollars => set({ inputDollars }),
    updateAllEventsUpdatedAt: time => set({ allEventsUpdatedAt: time }),
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

      get().updateAllEventsUpdatedAt(new Date().getTime())
    },
    updateTableData: () => {
      set(state => {
        if (state.inputDollars === '') {
          return { tableData: state.allEvents }
        } else {
          const cents = parseFloat(state.inputDollars) * 100
          const tableData = state.allEvents.filter(
            event => event.price === cents
          )
          return { tableData: tableData }
        }
      })
    }
  }))
}
