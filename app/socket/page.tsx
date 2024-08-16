'use client'

import { useEffect, useState } from 'react'
import Table from '@/components/table'
import { socket, OrderEvent } from '@/lib/socket'
import { dataSource } from '../_data/dataSource'
import { columns } from '../_data/columns'

const Home: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [transport, setTransport] = useState('N/A')

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true)
      setTransport(socket.io.engine.transport.name)

      socket.io.engine.on('upgrade', transport => {
        setTransport(transport.name)
      })
    }

    const onDisconnect = () => {
      setIsConnected(false)
      setTransport('N/A')
    }

    const onOrderEvent = (data: OrderEvent) => {
      console.log('Received order event', data)
    }

    if (socket.connected) {
      onConnect()
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('order_event', onOrderEvent)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('order_event', onOrderEvent)
    }
  }, [])

  return (
    <>
      <section>
        <p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
        <p>Transport: {transport}</p>
      </section>
      <section style={{ padding: '20px' }}>
        <h1>Custom Table with External Data</h1>
        <Table dataSource={dataSource} columns={columns} rowKey="id" />
      </section>
    </>
  )
}

export default Home
