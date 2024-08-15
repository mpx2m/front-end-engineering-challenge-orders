'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { StoreInterface, initializeStore, initStore } from './store'

export type StoreApi = ReturnType<typeof initializeStore>

export const StoreContext = createContext<StoreApi | undefined>(undefined)

export interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<StoreApi>()
  if (!storeRef.current) {
    storeRef.current = initializeStore(initStore())
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export const useAppStore = <T,>(selector: (store: StoreInterface) => T): T => {
  const storeContext = useContext(StoreContext)

  if (!storeContext) {
    throw new Error(`useAppStore must be used within StoreProvider`)
  }

  return useStore(storeContext, selector)
}
