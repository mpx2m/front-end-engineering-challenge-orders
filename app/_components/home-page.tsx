'use client'

import { useAppStore } from '@/lib/store/provider'

export const HomePage = () => {
  const { count, incrementCount, decrementCount } = useAppStore(state => state)

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>
        Increment Count
      </button>
      <button type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </button>
    </div>
  )
}
