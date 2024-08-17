'use client'

import { useAppStore } from '@/lib/store/provider'
import Table from '@/components/table'
import { columns } from './_data/columns'
import { OrderEvent } from '@/lib/socket/order-event'

const Page: React.FC = () => {
  const { isConnected, transport, orderEventTableData } = useAppStore(
    state => state
  )

  const countCustomers = (orderEventTableData: OrderEvent[]) => {
    const uniqueCustomers = new Set(
      orderEventTableData.map(order => order.customer)
    )
    return uniqueCustomers.size
  }

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
          <span>Order Count: {orderEventTableData.length}</span>
          <span style={{ marginLeft: 20 }} />
          <span>Customer Count: {countCustomers(orderEventTableData)}</span>
          <span style={{ marginLeft: 20 }} />
          <span>Total Amount ($): {30000}</span>
        </section>
      </div>
      <hr />
      <div style={{ marginTop: '20px' }}>
        <Table dataSource={orderEventTableData} columns={columns} rowKey="id" />
      </div>
    </div>
  )
}

export default Page
