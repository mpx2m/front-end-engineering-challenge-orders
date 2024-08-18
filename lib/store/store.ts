import { createStore } from 'zustand/vanilla'
import { OrderEvent } from '@/lib/socket/order-event'

export interface State {
  isConnected: boolean
  transport: string
  inputDollars: string
  selectedEvent: string
  eventOptions: string[]
  allEventsUpdatedAt: number
  allEvents: OrderEvent[]
  tableData: OrderEvent[]
}

export interface Actions {
  setIsConnected: (isConnected: boolean) => void
  setTransport: (transport: string) => void
  setInputDollars: (inputDollars: string) => void
  setSelectedEvent: (selectedEvent: string) => void
  updateAllEvents: (eventList: OrderEvent[]) => void
  updateTableData: () => void
}

export const initStore = (): State => {
  return {
    isConnected: false,
    transport: 'N/A',
    inputDollars: '',
    selectedEvent: '',
    eventOptions: [],
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
    setSelectedEvent: selectedEvent => set({ selectedEvent }),
    updateAllEvents: eventList => {
      set(state => {
        const allEvents = [...state.allEvents]
        const eventOptions = [...state.eventOptions]
        const allEventsUpdatedAt = new Date().getTime()

        eventList.forEach(event => {
          const index = allEvents.findIndex(({ id }) => id === event.id)
          if (index === -1) {
            allEvents.push(event)
          } else {
            allEvents[index] = event
          }

          if (!eventOptions.includes(event.event_name)) {
            eventOptions.push(event.event_name)
          }
        })

        if (eventOptions.length !== state.eventOptions.length) {
          return {
            allEvents,
            eventOptions,
            allEventsUpdatedAt
          }
        }

        return { allEvents, allEventsUpdatedAt }
      })
    },
    updateTableData: () => {
      set(state => {
        const { inputDollars, selectedEvent, allEvents } = state

        if (inputDollars === '' && selectedEvent === '') {
          return { tableData: allEvents }
        }

        const cents =
          inputDollars !== ''
            ? Math.round(parseFloat(inputDollars) * 100)
            : null

        const tableData = allEvents.filter(event => {
          const matchPrice = cents === null || event.price === cents
          const matchEvent =
            selectedEvent === '' || event.event_name === selectedEvent

          return matchPrice && matchEvent
        })

        return { tableData }
      })
    }
  }))
}
