'use client'

import Table from '@/components/table'

// 示例数据
const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  }
]

// 示例列定义
const columns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    key: 'age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    key: 'address',
    dataIndex: 'address'
  }
]

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Custom Table with External Data</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default Home
