'use client'

import { useState } from 'react'
import styled from 'styled-components'
import InputNumber from '@/components/input-number'
import InputNumber2 from '@/components/input-number/index2'
// import Select from '@/components/select'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
`

const FormGroup = styled.div``

const Spacer = styled.span`
  margin-right: 16px;
`

const Forms: React.FC = () => {
  // const options = ['Option 1', 'Option 2', 'Option 3']

  // const [value, setValue] = useState(undefined)
  const [value2, setValue2] = useState(0)

  return (
    <Container>
      <Title>Order Events</Title>
      <FormGroup>
        {/* <Select options={options} placeholder="Select an option" /> */}
        <Spacer />
        <InputNumber value={value2} onChange={setValue2} />
        {/* <InputNumber2 value={value} onChange={setValue} /> */}
      </FormGroup>
    </Container>
  )
}

export default Forms
