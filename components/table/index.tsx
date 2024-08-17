import React from 'react'
import styled from 'styled-components'
import { TableProps, DataItem } from './props'
import { theme, textColor, bg } from '@/components/theme'

const TableWrapper = styled.div`
  max-width: 100%;
  max-height: 2000px;
  overflow-x: auto;
  overflow-y: auto;
  border-radius: 4px;
`

const T = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Thead = styled.thead``

const Th = styled.th`
  padding: 0.75rem 1.25rem;
  text-align: left;
  border-bottom: 2px solid ${bg.color4};
  font-weight: 600;
`

const Tbody = styled.tbody`
  & tr:hover {
    background-color: ${theme.highlight2};
  }
`

const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: ${bg.color2};
  }
`

const Td = styled.td`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid ${bg.color4};
`

const NoDataMessage = styled.tr`
  height: 80px;
`

const NoDataTd = styled.td`
  text-align: center;
  color: ${textColor.color2};
  font-style: italic;
  font-size: 0.875rem;
`

const Table: React.FC<TableProps> = ({ dataSource, columns, rowKey }) => {
  const getRowKey = (record: DataItem) => {
    if (typeof rowKey === 'function') {
      return rowKey(record)
    } else if (typeof rowKey === 'string') {
      return record[rowKey]
    } else {
      return record.key
    }
  }

  return (
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
          {dataSource.length === 0 ? (
            <NoDataMessage>
              <NoDataTd colSpan={columns.length}>No data available</NoDataTd>
            </NoDataMessage>
          ) : (
            dataSource.map(data => (
              <Tr key={getRowKey(data)}>
                {columns.map(col => (
                  <Td key={col.key}>
                    {col.render
                      ? col.render(data[col.dataIndex], data)
                      : data[col.dataIndex]}
                  </Td>
                ))}
              </Tr>
            ))
          )}
        </Tbody>
      </T>
    </TableWrapper>
  )
}

export default Table
