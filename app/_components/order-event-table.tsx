'use client'

import { useEffect } from 'react'
import { useAppStore } from '@/lib/store/provider'
import Table from '@/components/table'
import columns from './../_data/columns'

const OrderEventTable: React.FC = () => {
  // const allEvents = useAppStore(state => state.allEvents)
  const tableData = useAppStore(state => state.tableData)
  const inputDollars = useAppStore(state => state.inputDollars)
  const allEventsUpdatedAt = useAppStore(state => state.allEventsUpdatedAt)
  const updateTableData = useAppStore(state => state.updateTableData)

  useEffect(() => {
    updateTableData()
  }, [inputDollars, allEventsUpdatedAt])

  return (
    <div>
      <Table dataSource={tableData} columns={columns} rowKey="id" />
    </div>
  )
}

export default OrderEventTable
