'use client'

import { io } from 'socket.io-client'

export interface OrderEvent {
  customer: string
  destination: string
  event_name: string
  id: string
  item: string
  price: number
  sent_at_second: number
}

export const socket = io('http://localhost:4000')
