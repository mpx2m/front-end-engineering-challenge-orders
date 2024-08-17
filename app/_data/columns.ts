export const columns = [
  {
    title: 'Id',
    key: 'id',
    dataIndex: 'id'
  },
  {
    title: 'Customer',
    key: 'customer',
    dataIndex: 'customer'
  },
  {
    title: 'Destination',
    key: 'destination',
    dataIndex: 'destination'
  },
  {
    title: 'Event name',
    key: 'event_name',
    dataIndex: 'event_name'
  },
  {
    title: 'Item',
    key: 'item',
    dataIndex: 'item'
  },
  {
    title: 'Price',
    key: 'price',
    dataIndex: 'price',
    render: (value: number) => `$${(value / 100).toFixed(2)}`
  }
  // {
  //   title: 'Sent at second',
  //   key: 'sent_at_second',
  //   dataIndex: 'sent_at_second'
  // }
]
