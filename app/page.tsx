'use client'

import { useState } from 'react'
import { useAppStore } from '@/lib/store/provider'
import Table from '@/components/table'
import { dataSource } from './_data/dataSource'
import { columns } from './_data/columns'

const Page: React.FC = () => {
  const { count, incrementCount, decrementCount } = useAppStore(state => state)
  const [isConnected, setIsConnected] = useState(false)
  const [transport, setTransport] = useState('N/A')

  return (
    <div
      style={{
        padding: 24,
        textAlign: 'center'
      }}
    >
      <section>
        Count: {count}
        <hr />
        <button type="button" onClick={() => void incrementCount()}>
          Increment Count
        </button>
        <button type="button" onClick={() => void decrementCount()}>
          Decrement Count
        </button>
      </section>
      <section>
        <p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
        <p>Transport: {transport}</p>
      </section>
      <section style={{ padding: '20px' }}>
        <h1>Custom Table with External Data</h1>
        <Table dataSource={dataSource} columns={columns} rowKey="id" />
      </section>
    </div>
  )
}

export default Page
