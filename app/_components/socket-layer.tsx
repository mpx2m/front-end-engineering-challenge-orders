'use client'

import { type ReactNode, useEffect } from 'react'
import { socket } from '@/lib/socket/client'
import { OrderEvent } from '@/lib/socket/order-event'
import { useAppStore } from '@/lib/store/provider'

interface SocketLayerProps {
  children: ReactNode
}

const SocketLayer: React.FC<SocketLayerProps> = ({ children }) => {
  const { setIsConnected, setTransport, updateOrderEvents } = useAppStore(
    state => state
  )

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

    const onOrderEvent = (eventList: OrderEvent[]) => {
      updateOrderEvents(eventList)
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
