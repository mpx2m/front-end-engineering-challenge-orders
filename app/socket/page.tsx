'use client'

import { useEffect, useState } from 'react'
import Table from '@/components/table'
import { socket, OrderEvent } from '@/lib/socket'

// 示例数据
const dataSource = [
  {
    customer: 'Carla Garner',
    destination: '61109 Alan Motorway, North Corey, CA 92789',
    event_name: 'CREATED',
    id: 'd0791ce11',
    item: 'Caesar salad',
    price: 4692,
    sent_at_second: 6
  },
  {
    customer: 'Carla Garner',
    destination: '61109 Alan Motorway, North Corey, CA 92789',
    event_name: 'COOKED',
    id: 'd0791ce12',
    item: 'Caesar salad',
    price: 4692,
    sent_at_second: 13
  },
  {
    customer: 'Carla Garner',
    destination: '61109 Alan Motorway, North Corey, CA 92789',
    event_name: 'DRIVER_RECEIVED',
    id: 'd0791ce13',
    item: 'Caesar salad',
    price: 4692,
    sent_at_second: 18
  }
]

// 示例列定义
const columns = [
  {
    title: 'Id',
    key: 'id',
    dataIndex: 'id'
  },
  {
    title: 'Customer',
    key: 'customer',
    dataIndex: 'customer'
  },
  {
    title: 'Destination',
    key: 'destination',
    dataIndex: 'destination'
  },
  {
    title: 'Event name',
    key: 'event_name',
    dataIndex: 'event_name'
  },
  {
    title: 'Item',
    key: 'item',
    dataIndex: 'item'
  },
  {
    title: 'Price',
    key: 'price',
    dataIndex: 'price'
  },
  {
    title: 'Sent at second',
    key: 'sent_at_second',
    dataIndex: 'sent_at_second'
  }
]

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
