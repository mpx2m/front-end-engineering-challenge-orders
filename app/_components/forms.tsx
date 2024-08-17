'use client'

import InputNumber from '@/components/input-number'
// import Select from '@/components/select'

const Forms: React.FC = () => {
  // const options = ['Option 1', 'Option 2', 'Option 3']

  return (
    <div style={{ height: 56 }}>
      <InputNumber />
      <span style={{ marginRight: 16 }} />
      {/* <Select options={options} placeholder="Select an option" /> */}
    </div>
  )
}

export default Forms
