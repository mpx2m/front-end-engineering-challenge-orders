'use client'

import styled from 'styled-components'
import InputNumber from '@/components/input-number'
import Select from '@/components/select'

const Content = styled.div`
  height: 56px;
`
const Title = styled.div``
const FormGroup = styled.div``

const Forms: React.FC = () => {
  const options = ['Option 1', 'Option 2', 'Option 3']

  return (
    <Content>
      <Title>Order Event Table</Title>
      <FormGroup>
        <Select options={options} placeholder="Select an option" />
        <span style={{ marginRight: 16 }} />
        <InputNumber />
      </FormGroup>
    </Content>
  )
}

export default Forms
