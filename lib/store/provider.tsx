'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { StoreInterface, initializeStore, initStore } from './store'

export type StoreApi = ReturnType<typeof initializeStore>

export const CounterStoreContext = createContext<StoreApi | undefined>(
  undefined
)

export interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<StoreApi>()
  if (!storeRef.current) {
    storeRef.current = initializeStore(initStore())
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  )
}

export const useAppStore = <T,>(selector: (store: StoreInterface) => T): T => {
  const counterStoreContext = useContext(CounterStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useAppStore must be used within StoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}
