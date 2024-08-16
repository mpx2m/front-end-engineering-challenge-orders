'use client'

import { useAppStore } from '@/lib/store/provider'

const Page: React.FC = () => {
  const { count, incrementCount, decrementCount } = useAppStore(state => state)

  return (
    <div
      style={{
        padding: 24,
        textAlign: 'center'
      }}
    >
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
      <p>long content</p>
      {Array.from({ length: 100 }, (_, index) => (
        <div key={index}>
          {index % 20 === 0 && index ? 'more' : '...'}
          <br />
        </div>
      ))}
    </div>
  )
}

export default Page
