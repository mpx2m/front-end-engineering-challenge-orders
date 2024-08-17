'use client'

import { useAppStore } from '@/lib/store/provider'
import Table from '@/components/table'
import { columns } from './_data/columns'
import { OrderEvent } from '@/lib/socket/order-event'
import InputNumber from '@/components/InputNumber'
// import { dataSourceTest } from './_data/dataSourceTest' // FOR Test

const Page: React.FC = () => {
  const isConnected = useAppStore(state => state.isConnected)
  const transport = useAppStore(state => state.transport)
  const tableData = useAppStore(state => state.tableData)

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
          <span>Order Count: {tableData.length}</span>
          <span style={{ marginLeft: 20 }} />
          <span>Customer Count: {countCustomers(tableData)}</span>
          <span style={{ marginLeft: 20 }} />
          <span>Total Amount: {countTotalAmount(tableData)}</span>
        </section>
      </div>
      <hr />
      <InputNumber />
      <div style={{ marginTop: '20px' }}>
        <Table dataSource={tableData} columns={columns} rowKey="id" />
      </div>
    </div>
  )
}

export default Page
