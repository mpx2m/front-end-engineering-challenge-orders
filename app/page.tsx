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
      <div>
        <h1>Custom Table with External Data</h1>
        <section>
          <span>Status: {isConnected ? 'connected' : 'disconnected'}</span>
          <span style={{ marginLeft: 20 }} />
          <span>Transport: {transport}</span>
          <span style={{ marginLeft: 20 }} />
          <span>Order Count: {10000}</span>
          <span style={{ marginLeft: 20 }} />
          <span>Customer Count: {20000}</span>
          <span style={{ marginLeft: 20 }} />
          <span>Total Amount ($): {30000}</span>
        </section>
      </div>
      <hr />
      <div>
        <section>Count: {count}</section>
        <button type="button" onClick={() => void incrementCount()}>
          Increment Count
        </button>
        <button type="button" onClick={() => void decrementCount()}>
          Decrement Count
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Table dataSource={dataSource} columns={columns} rowKey="id" />
      </div>
    </div>
  )
}

export default Page
