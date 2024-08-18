'use client'

import styled from 'styled-components'
import StatusPanel from './_components/status-panel'
import { bg } from '@/components/theme'
import Forms from './_components/forms'
import OrderEventTable from './_components/order-event-table'

const OrderEventContent = styled.div`
  margin-top: 16px;
  padding: 24px;
  background: ${bg.color1};
  min-height: 400px;
`

const Page: React.FC = () => {
  return (
    <>
      <StatusPanel />
      <OrderEventContent>
        <Forms />
        <OrderEventTable />
      </OrderEventContent>
    </>
  )
}

export default Page
