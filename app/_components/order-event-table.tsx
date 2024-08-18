'use client'

import { useAppStore } from '@/lib/store/provider'
import Table from '@/components/table'
import columns from './../_data/columns'

const OrderEventTable: React.FC = () => {
  const tableData = useAppStore(state => state.tableData)
  // const allEvents = useAppStore(state => state.allEvents)

  return (
    <div>
      <Table dataSource={tableData} columns={columns} rowKey="id" />
    </div>
  )
}

export default OrderEventTable
