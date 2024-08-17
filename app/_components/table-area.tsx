'use client'

import { useAppStore } from '@/lib/store/provider'
import Table from '@/components/table'
import columns from './../_data/columns'

const TableArea: React.FC = () => {
  const tableData = useAppStore(state => state.tableData)

  return (
    <div>
      <Table dataSource={tableData} columns={columns} rowKey="id" />
    </div>
  )
}

export default TableArea
