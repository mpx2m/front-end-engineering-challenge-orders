export interface Column {
  title: string
  key: string
  dataIndex: string
  render?: (value: any, record: DataItem) => React.ReactNode
}

export interface DataItem {
  [key: string]: any
}

export interface TableProps {
  dataSource: DataItem[]
  columns: Column[]
  rowKey?: string | ((record: DataItem) => string)
}
