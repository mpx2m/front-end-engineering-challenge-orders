interface Column {
  title: string
  key: string
  dataIndex: string
}

interface DataItem {
  key: string
  [key: string]: any
}

export interface TableProps {
  dataSource: DataItem[]
  columns: Column[]
}
