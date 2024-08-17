'use client'

import styled from 'styled-components'
import { useAppStore } from '@/lib/store/provider'
import { theme, bg, textColor } from '@/components/theme'
import { OrderEvent } from '@/lib/socket/order-event'

const Container = styled.div`
  display: flex;
  background: ${bg.color1};
  padding: 20px;
`

const Item = styled.div`
  background: ${bg.color1};
  text-align: center;
  flex: 1;

  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`

const ItemTitle = styled.div`
  font-size: 14px;
  color: ${textColor.color2};
`

const ItemContent = styled.div`
  margin-top: 8px;
  font-size: 24px;
`

const Disconnected = styled.span`
  color: ${theme.highlight};
`

const StatusPanel: React.FC = () => {
  const tableData = useAppStore(state => state.tableData)
  const isConnected = useAppStore(state => state.isConnected)

  const countCustomers = (tableData: OrderEvent[]) => {
    return new Set(tableData.map(event => event.customer)).size
  }

  const countTotalAmount = (tableData: OrderEvent[]) => {
    const totalAmount = tableData.reduce(
      (total, event) => total + event.price,
      0
    )
    return `$${(totalAmount / 100).toFixed(2)}`
  }

  return (
    <Container>
      <Item>
        <ItemTitle>Order Count</ItemTitle>
        <ItemContent>{tableData.length}</ItemContent>
      </Item>
      <Item>
        <ItemTitle>Customer Count</ItemTitle>
        <ItemContent>{countCustomers(tableData)}</ItemContent>
      </Item>
      <Item>
        <ItemTitle>Total Amount</ItemTitle>
        <ItemContent>{countTotalAmount(tableData)}</ItemContent>
      </Item>
      <Item>
        <ItemTitle>Status</ItemTitle>
        <ItemContent>
          {isConnected ? (
            'connected'
          ) : (
            <Disconnected>disconnected</Disconnected>
          )}
        </ItemContent>
      </Item>
    </Container>
  )
}

export default StatusPanel
