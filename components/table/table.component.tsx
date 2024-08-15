import React from 'react'
import styled from 'styled-components'
import { TableProps } from './table.props'

const TableWrapper = styled.div`
  max-width: 100%;
  overflow-x: auto;
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`

const T = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`

const Thead = styled.thead`
  background-color: #f8f9fa;
  color: #212529;
`

const Th = styled.th`
  padding: 0.75rem 1.25rem;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
`

const Tbody = styled.tbody``

const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
  &:nth-child(even) {
    background-color: #fff;
  }
  &:hover {
    background-color: #e9ecef;
  }
`

const Td = styled.td`
  padding: 0.75rem 1.25rem;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
`

const Table: React.FC<TableProps> = ({ dataSource, columns }) => (
  <TableWrapper>
    <T>
      <Thead>
        <Tr>
          {columns.map(col => (
            <Th key={col.key}>{col.title}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {dataSource.map(data => (
          <Tr key={data.key}>
            {columns.map(col => (
              <Td key={col.key}>{data[col.dataIndex]}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </T>
  </TableWrapper>
)

export default Table
