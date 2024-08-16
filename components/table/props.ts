export interface Column {
  title: string
  key: string
  dataIndex: string
}

export interface DataItem {
  [key: string]: any
}

export interface TableProps {
  dataSource: DataItem[]
  columns: Column[]
  rowKey?: string | ((record: DataItem) => string)
}
