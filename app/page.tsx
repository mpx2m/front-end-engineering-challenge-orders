'use client'

import styled from 'styled-components'
import { useAppStore } from '@/lib/store/provider'
import Table from '@/components/table'
import columns from './_data/columns'
import InputNumber from '@/components/input-number'
import Select from '@/components/select'
import StatusPanel from './_components/status-panel'
import { bg } from '@/components/theme'

const TableArea = styled.div`
  margin-top: 24px;
  padding: 24px;
  background: ${bg.color1};
`

const Page: React.FC = () => {
  const tableData = useAppStore(state => state.tableData)

  const options = ['Option 1', 'Option 2', 'Option 3']

  return (
    <>
      <StatusPanel />
      <TableArea>
        <InputNumber />
        <Select options={options} placeholder="Select an option" />
        <Table dataSource={tableData} columns={columns} rowKey="id" />
      </TableArea>
    </>
  )
}

export default Page
