'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { socket, OrderEvent } from '@/lib/socket'

interface SocketLayerProps {
  children: ReactNode
}

const SocketLayer: React.FC<SocketLayerProps> = ({ children }) => {
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

  return <>{children}</>
}

export default SocketLayer
